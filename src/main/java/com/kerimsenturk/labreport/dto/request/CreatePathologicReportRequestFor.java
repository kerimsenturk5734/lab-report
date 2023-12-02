package com.kerimsenturk.labreport.dto.request;

public record CreatePathologicReportRequestFor(int diseaseId, String labTechnicianId, String title, String details) {
}
