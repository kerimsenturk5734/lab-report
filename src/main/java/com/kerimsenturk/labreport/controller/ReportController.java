package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.ReportDto;
import com.kerimsenturk.labreport.dto.request.CreateDiagnosticReportRequestFor;
import com.kerimsenturk.labreport.dto.request.CreatePathologicReportRequestFor;
import com.kerimsenturk.labreport.dto.request.UpdateReportRequest;
import com.kerimsenturk.labreport.dto.response.DownloadReportResponse;
import com.kerimsenturk.labreport.service.ReportService;
import com.kerimsenturk.labreport.util.MessageBuilder;
import com.kerimsenturk.labreport.util.Result.SuccessDataResult;
import com.kerimsenturk.labreport.util.Result.SuccessResult;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("v1/api/reports")
public class ReportController {
    private final ReportService reportService;
    private final MessageBuilder messageBuilder;
    public ReportController(ReportService reportService, MessageBuilder messageBuilder) {
        this.reportService = reportService;
        this.messageBuilder = messageBuilder;
    }

    @PostMapping("/createPathologicalReportFor")
    public ResponseEntity<?> createPathologicalReportFor(CreatePathologicReportRequestFor createPathologicReportRequestFor){
        String id = reportService.createPathologicReportFor(createPathologicReportRequestFor);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();

        //Create success message
        String message = messageBuilder
                .code("formatted.reportCreatedFor")
                .params(id, createPathologicReportRequestFor.diseaseId())
                .build();

        return ResponseEntity.created(uri).body(new SuccessResult(message));
    }

    @PostMapping("/createDiagnosticReportFor")
    public ResponseEntity<?> createDiagnosticReportFor(CreateDiagnosticReportRequestFor createDiagnosticReportRequestFor){
        String id = reportService.createDiagnosticReportFor(createDiagnosticReportRequestFor);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();

        //Create success message
        String message = messageBuilder
                .code("formatted.reportCreatedFor")
                .params(id, createDiagnosticReportRequestFor.diseaseId())
                .build();

        return ResponseEntity.created(uri).body(new SuccessResult(message));
    }

    @GetMapping("/getAllReports")
    public ResponseEntity<?> getAllReports(){
        //Get all reports
        List<ReportDto> reportDtoList = reportService.getAllReports();

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.reportsFounded")
                        .params(reportDtoList.size())
                        .build();

        //Place the reports into Result wrapper object
        return ResponseEntity.ok(new SuccessDataResult<List<ReportDto>>(reportDtoList, message));
    }

    @PutMapping("/updateReport")
    public ResponseEntity<?> updateReport(UpdateReportRequest updateReportRequest){
        String updatedReportId = reportService.updateReport(updateReportRequest);

        //Create successful message
        String message =
                messageBuilder
                        .code("formatted.reportUpdated")
                        .params(updatedReportId)
                        .build();

        return ResponseEntity.ok(new SuccessResult(message));
    }
    @GetMapping("/downloadReport")
    @ResponseBody
    public ResponseEntity<?> downloadReport(@RequestParam String reportId) {
        DownloadReportResponse res = reportService.downloadReport(reportId);

        String fileNameHeader = new StringBuilder("attachment; filename=").append(res.fileName()).toString();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, fileNameHeader)
                .contentType(res.mediaType())
                .body(new InputStreamResource(res.in()));
    }
}
