package com.kerimsenturk.labreport.service;

import com.kerimsenturk.labreport.dto.ReportDto;
import com.kerimsenturk.labreport.dto.converter.ReportAndReportDtoConverter;
import com.kerimsenturk.labreport.dto.request.CreateReportRequest;
import com.kerimsenturk.labreport.dto.request.UpdateReportRequest;
import com.kerimsenturk.labreport.model.Report;
import com.kerimsenturk.labreport.repository.ReportRepository;
import com.kerimsenturk.labreport.util.MessageBuilder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ReportService {
    private final ReportRepository reportRepository;
    private final ReportFileManager reportFileManager;
    private final ReportAndReportDtoConverter reportAndReportDtoConverter;
    private final MessageBuilder messageBuilder;

    public ReportService(ReportRepository reportRepository, ReportFileManager reportFileManager, ReportAndReportDtoConverter reportAndReportDtoConverter, MessageBuilder messageBuilder) {
        this.reportRepository = reportRepository;
        this.reportFileManager = reportFileManager;
        this.reportAndReportDtoConverter = reportAndReportDtoConverter;
        this.messageBuilder = messageBuilder;
    }


    public ReportDto getReportById(String reportId){

    }

    public List<ReportDto> getReportsByUserId(String userId){

    }
    public List<ReportDto> getAllReports(){

    }

    public String createReport(CreateReportRequest createReportRequest){
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

        //Save the report file
        reportFileManager.saveReportObject(report);
        return reportRepository.save(report).toString();

        /*  Transactional process might be necessary at this point.
            Because if report object could not save to database, we can not create a file.

            If saving to database resulted as success, we have to create a file
            If we can not create a file we have to delete the object inside database
         */
    }
    public String updateReport(UpdateReportRequest updateReportRequest){

    }

    private String buildReportId(String patientId){
        /*
            Pattern --> "${patientId}_${UUID.randomUUID().toString()}"
         */

        return String.format("%s_%s", patientId, UUID.randomUUID());
    }
}