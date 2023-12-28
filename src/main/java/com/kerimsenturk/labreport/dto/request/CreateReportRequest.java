package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.dto.validator.PatientIdValid;
import com.kerimsenturk.labreport.model.enums.ReportType;

public record CreateReportRequest(
        @PatientIdValid
        String patientId,
        String title,
        String details,
        ReportType reportType ) {
}
