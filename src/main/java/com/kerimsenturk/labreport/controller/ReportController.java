package com.kerimsenturk.labreport.controller;

import com.kerimsenturk.labreport.dto.request.CreateDiagnosticReportRequestFor;
import com.kerimsenturk.labreport.dto.request.CreatePathologicReportRequestFor;
import com.kerimsenturk.labreport.model.Disease;
import com.kerimsenturk.labreport.service.ReportService;
import com.kerimsenturk.labreport.util.MessageBuilder;
import com.kerimsenturk.labreport.util.Result.SuccessResult;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

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
}
