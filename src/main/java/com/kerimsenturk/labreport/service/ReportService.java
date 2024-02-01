package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.auth.JwtTokenManager;
import com.kerimsenturk.labreport.dto.DiseaseDto;
import com.kerimsenturk.labreport.dto.ReportDto;
import com.kerimsenturk.labreport.dto.converter.DiseaseAndDiseaseDtoConverter;
import com.kerimsenturk.labreport.dto.converter.ReportAndReportDtoConverter;
import com.kerimsenturk.labreport.dto.converter.UserAndUserDtoConverter;
import com.kerimsenturk.labreport.dto.request.*;
import com.kerimsenturk.labreport.dto.response.DownloadReportResponse;
import com.kerimsenturk.labreport.exception.NotFound.ReportFileNotFoundException;
import com.kerimsenturk.labreport.exception.NotFound.ReportNotFoundException;

import com.kerimsenturk.labreport.exception.AlreadyExist.ReportAlreadyExistForException;
import com.kerimsenturk.labreport.model.Disease;
import com.kerimsenturk.labreport.model.Report;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.model.enums.DiseaseState;
import com.kerimsenturk.labreport.model.enums.ReportType;

import com.kerimsenturk.labreport.repository.ReportRepository;
import com.kerimsenturk.labreport.util.MessageBuilder;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ReportService {
    private final ReportRepository reportRepository;
    private final ReportFileManager reportFileManager;
    private final DiseaseService diseaseService;
    private final UserService userService;
    private final UserAndUserDtoConverter userAndUserDtoConverter;
    private final DiseaseAndDiseaseDtoConverter diseaseAndDiseaseDtoConverter;
    private final ReportAndReportDtoConverter reportAndReportDtoConverter;
    private final MessageBuilder messageBuilder;
    private final JwtTokenManager jwtTokenManager;

    public ReportService(
            ReportRepository reportRepository,
            ReportFileManager reportFileManager,
            DiseaseService diseaseService,
            UserService userService,
            UserAndUserDtoConverter userAndUserDtoConverter,
            DiseaseAndDiseaseDtoConverter diseaseAndDiseaseDtoConverter,
            ReportAndReportDtoConverter reportAndReportDtoConverter,
            MessageBuilder messageBuilder, JwtTokenManager jwtTokenManager) {

        this.reportRepository = reportRepository;
        this.reportFileManager = reportFileManager;
        this.diseaseService = diseaseService;
        this.userService = userService;
        this.userAndUserDtoConverter = userAndUserDtoConverter;
        this.diseaseAndDiseaseDtoConverter = diseaseAndDiseaseDtoConverter;
        this.reportAndReportDtoConverter = reportAndReportDtoConverter;
        this.messageBuilder = messageBuilder;
        this.jwtTokenManager = jwtTokenManager;
    }


    public ReportDto getReportById(String id) {
        //Get the optional disease
        Optional<Report> reportOptional = reportRepository.findById(id);

        //Get error message
        String message =
                messageBuilder
                        .code("formatted.reportNotFoundById")
                        .params(id)
                        .build();

        //Check the is it present or not, else throw exception
        Report report = reportOptional.orElseThrow(() -> new ReportNotFoundException(message));

        //Convert the disease to diseaseDto and return the diseaseDto
        return reportAndReportDtoConverter.convert(report);
    }

    public List<ReportDto> getAllReports() {
        //Get all diseases
        List<Report> reportList = reportRepository.findAll();

        //Convert them to dto object and return
        return convertToDtoList(reportList);
    }

    public DownloadReportResponse downloadReport(String reportId) {
        //Get related report
        ReportDto reportDto = getReportById(reportId);

        try {
            //Get the report as file by file path
            File file = ResourceUtils.getFile(reportDto.getFilePath());

            return new DownloadReportResponse(
                    new FileInputStream(file),
                    file.getName(),
                    MediaType.APPLICATION_PDF);
        } catch (IOException e) {
            throw new ReportFileNotFoundException(e.getMessage());
        }
    }

    public String updateReport(UpdateReportRequest updateReportRequest, String authHeader) {
        //Parse token from 'Authorization' header
        String token = authHeader.substring(7);

        //Extract user by using token
        String userId = Optional.of(jwtTokenManager.extractUser(token)).orElse("");

        //Call getReportById to handle ReportNotFoundException
        //If there is not an error at this line now we can get the real report
        String reportId = updateReportRequest.reportId().orElse("");

        //Get the report object
        Report report = reportAndReportDtoConverter.deConvert(getReportById(reportId));

        //Update the object
        //If fields not present in updateRequest, don't change the fields

        report.setTitle(updateReportRequest.title().orElse(report.getTitle()));
        report.setDetails(updateReportRequest.details().orElse(report.getDetails()));
        report.setIssueDate(new Date());

        DiseaseDto diseaseDto = (report.getReportType() == ReportType.DIAGNOSTIC) ?
                diseaseService.getDiseasesByDiagnosticReportId(reportId) :
                diseaseService.getDiseasesByPathologicReportId(reportId);


        diseaseDto.setLabTechnician(userService.getUserById(userId));
        diseaseDto.setDiseaseState((report.getReportType() == ReportType.DIAGNOSTIC) ?
                DiseaseState.DIAGNOSTIC_UPDATED : DiseaseState.PATHOLOGIC_UPDATED);
        //Update disease as updated
        diseaseService.saveDisease(diseaseAndDiseaseDtoConverter.deConvert(diseaseDto));

        //Save report object as updated file
        reportFileManager.saveReportFileObjectAsFile(new ReportFile(report, diseaseAndDiseaseDtoConverter.deConvert(diseaseDto)));

        //return updated userId
        return reportRepository.save(report).getReportId();
    }

    private String createReport(CreateReportRequest createReportRequest) {
        //Check the patientId is valid
        //getUserById will throw exception if encounter a problem when getting the patient
        userService.getUserById(createReportRequest.patientId());

        //Generate UUID for
        String reportId = buildReportId(createReportRequest.patientId());

        //Build file path
        String filePath =
                reportFileManager
                        .buildReportFilePath(
                                createReportRequest.patientId(),
                                createReportRequest.reportType(),
                                false);

        //Create the report object that will be saving
        Report report = new Report(
                reportId,
                createReportRequest.title(),
                createReportRequest.details(),
                new Date(),
                filePath,
                createReportRequest.reportType());

        return reportRepository.save(report).getReportId();

        /*  Transactional process might be necessary at this point.
            Because if report object could not save to database, we can not create a file.

            If saving to database resulted as success, we have to create a file
            If we can not create a file we have to delete the object inside database
         */
    }

    public String createPathologicReportFor(CreatePathologicReportRequestFor createPathologicReportRequestFor) {

        handleIsReportAlreadyExistFor(createPathologicReportRequestFor.diseaseId(), ReportType.PATHOLOGICAL);

        //Get the related disease
        Disease disease = diseaseAndDiseaseDtoConverter
                .deConvert(diseaseService.getDiseaseById(createPathologicReportRequestFor.diseaseId()));

        //Build the request object to create report.
        CreateReportRequest createReportRequest = new CreateReportRequest(
                disease.getPatient().getUserId(),
                createPathologicReportRequestFor.title(),
                createPathologicReportRequestFor.details(),
                ReportType.PATHOLOGICAL);

        //Get lab technician from user service
        String labTechnicianId = createPathologicReportRequestFor.labTechnicianId();
        User labTechnician = userAndUserDtoConverter.deConvert(userService.getUserById(labTechnicianId));

        //Create and get created report id
        String createdReportId = createReport(createReportRequest);

        //Get report by report id
        Report report = reportAndReportDtoConverter.deConvert(getReportById(createdReportId));

        //Set related fields inside disease object.
        disease.setPathologicReport(report);
        disease.setDiseaseState(DiseaseState.PATHOLOGIC_RESULTED);
        disease.setLabTechnician(labTechnician);

        //Update the disease
        diseaseService.saveDisease(disease);

        //Create report file
        createReportFile(new ReportFile(report, disease));

        return createdReportId;
    }

    private void createReportFile(ReportFile reportFile) {
        reportFileManager.saveReportFileObjectAsFile(reportFile);
    }

    public String createDiagnosticReportFor(CreateDiagnosticReportRequestFor createDiagnosticReportRequestFor) {

        handleIsReportAlreadyExistFor(createDiagnosticReportRequestFor.diseaseId(), ReportType.DIAGNOSTIC);

        //Get the related disease
        Disease disease = diseaseAndDiseaseDtoConverter
                .deConvert(diseaseService.getDiseaseById(createDiagnosticReportRequestFor.diseaseId()));

        //Build the request object to create report.
        CreateReportRequest createReportRequest = new CreateReportRequest(
                disease.getPatient().getUserId(),
                createDiagnosticReportRequestFor.title(),
                createDiagnosticReportRequestFor.details(),
                ReportType.DIAGNOSTIC);

        //Create and get created report id
        String createdReportId = createReport(createReportRequest);

        //Get report by report id
        Report report = reportAndReportDtoConverter.deConvert(getReportById(createdReportId));

        disease.setDiagnosticReport(report);
        disease.setDiseaseState(DiseaseState.DIAGNOSTIC_RESULTED);

        //Update the disease
        diseaseService.saveDisease(disease);

        //Create report file
        createReportFile(new ReportFile(report, disease));

        return createdReportId;
    }

    private boolean isReportExistFor(int diseaseId, ReportType reportType) {
        DiseaseDto diseaseDto = diseaseService.getDiseaseById(diseaseId);

        if (reportType == ReportType.DIAGNOSTIC)
            return (diseaseDto.getDiagnosticReport() != null);

        else
            return (diseaseDto.getPathologicReport() != null);

    }

    private void handleIsReportAlreadyExistFor(int diseaseId, ReportType reportType) throws ReportAlreadyExistForException {
        //Handle is an indicated type report exist for this disease
        if (isReportExistFor(diseaseId, reportType)) {
            String message =
                    messageBuilder
                            .code("formatted.reportAlreadyExistFor")
                            .params(diseaseId, reportType)
                            .build();

            throw new ReportAlreadyExistForException(message);
        }
    }

    private String buildReportId(String patientId) {
        /*
            Pattern --> "${patientId}_${UUID.randomUUID().toString()}"
         */

        return String.format("%s_%s", patientId, UUID.randomUUID());
    }

    private List<ReportDto> convertToDtoList(List<Report> reportList) {
        return reportList
                .stream()
                .map(reportAndReportDtoConverter::convert)
                .collect(Collectors.toList());
    }

    public void deleteReport(String reportId) {
        //Get the related report
        ReportDto reportDto = getReportById(reportId);

        try {
            //Delete from local storage
            reportFileManager.deleteReportFile(reportDto);

        } catch (Exception e) {
            e.fillInStackTrace();
        }

    }
}