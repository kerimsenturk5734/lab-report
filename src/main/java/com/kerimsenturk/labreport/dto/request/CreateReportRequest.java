package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.model.enums.ReportType;

public record CreateReportRequest(String patientId, String title, String details, ReportType reportType ) {
}
