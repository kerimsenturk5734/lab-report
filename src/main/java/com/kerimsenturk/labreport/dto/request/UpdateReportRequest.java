package com.kerimsenturk.labreport.dto.request;

import java.util.Optional;

public record UpdateReportRequest(
        Optional<String> reportId,
        Optional<String> title,
        Optional<String> details) {
}
