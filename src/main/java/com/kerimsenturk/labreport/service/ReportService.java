package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.dto.ReportDto;
import com.kerimsenturk.labreport.dto.converter.DiseaseAndDiseaseDtoConverter;
import com.kerimsenturk.labreport.dto.converter.ReportAndReportDtoConverter;
import com.kerimsenturk.labreport.dto.converter.UserAndUserDtoConverter;
import com.kerimsenturk.labreport.dto.request.CreateDiagnosticReportRequestFor;
import com.kerimsenturk.labreport.dto.request.CreatePathologicReportRequestFor;
import com.kerimsenturk.labreport.dto.request.CreateReportRequest;
import com.kerimsenturk.labreport.exception.NotFound.ReportNotFoundException;

import com.kerimsenturk.labreport.model.Disease;
import com.kerimsenturk.labreport.model.Report;
import com.kerimsenturk.labreport.model.User;
import com.kerimsenturk.labreport.model.enums.DiseaseState;
import com.kerimsenturk.labreport.model.enums.ReportType;

import com.kerimsenturk.labreport.repository.ReportRepository;
import com.kerimsenturk.labreport.util.MessageBuilder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

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

    public ReportService(
            ReportRepository reportRepository,
            ReportFileManager reportFileManager,
            DiseaseService diseaseService,
            UserService userService,
            UserAndUserDtoConverter userAndUserDtoConverter,
            DiseaseAndDiseaseDtoConverter diseaseAndDiseaseDtoConverter,
            ReportAndReportDtoConverter reportAndReportDtoConverter,
            MessageBuilder messageBuilder) {

        this.reportRepository = reportRepository;
        this.reportFileManager = reportFileManager;
        this.diseaseService = diseaseService;
        this.userService = userService;
        this.userAndUserDtoConverter = userAndUserDtoConverter;
        this.diseaseAndDiseaseDtoConverter = diseaseAndDiseaseDtoConverter;
        this.reportAndReportDtoConverter = reportAndReportDtoConverter;
        this.messageBuilder = messageBuilder;
    }


    public ReportDto getReportById(String id){
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
    private String createReport(CreateReportRequest createReportRequest){
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

        //Save the report object as file
        reportFileManager.saveReportObjectAsFile(report);
        return reportRepository.save(report).getReportId();

        /*  Transactional process might be necessary at this point.
            Because if report object could not save to database, we can not create a file.

            If saving to database resulted as success, we have to create a file
            If we can not create a file we have to delete the object inside database
         */
    }
    public String createPathologicReportFor(CreatePathologicReportRequestFor createPathologicReportRequestFor){
        //Get the related disease
        Disease disease = diseaseAndDiseaseDtoConverter
                .deConvert(diseaseService.getDiseaseById(createPathologicReportRequestFor.diseaseId()));

        //Build the request object to create report.
        CreateReportRequest createReportRequest = new CreateReportRequest(
                disease.getPatient().getUserId(),
                createPathologicReportRequestFor.title(),
                createPathologicReportRequestFor.details(),
                ReportType.PATHOLOGICAL);

        //Create and get created report id
        String createdReportId = createReport(createReportRequest);

        //Get report by report id
        Report report = reportAndReportDtoConverter.deConvert(getReportById(createdReportId));

        //Get lab technician from user service
        String labTechnicianId = createPathologicReportRequestFor.labTechnicianId();
        User labTechnician = userAndUserDtoConverter.deConvert(userService.getUserById(labTechnicianId));

        //Set related fields inside disease object.
        disease.setPathologicReport(report);
        disease.setDiseaseState(DiseaseState.PATHOLOGIC_RESULTED);
        disease.setLabTechnician(labTechnician);

        //Update the disease
        diseaseService.saveDisease(disease);

        return createdReportId;
    }
    public String createDiagnosticReportFor(CreateDiagnosticReportRequestFor createDiagnosticReportRequestFor){
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

        disease.setPathologicReport(report);
        disease.setDiseaseState(DiseaseState.DIAGNOSTIC_RESULTED);

        //Update the disease
        diseaseService.saveDisease(disease);

        return createdReportId;
    }
    private String buildReportId(String patientId){
        /*
            Pattern --> "${patientId}_${UUID.randomUUID().toString()}"
         */

        return String.format("%s_%s", patientId, UUID.randomUUID());
    }
}