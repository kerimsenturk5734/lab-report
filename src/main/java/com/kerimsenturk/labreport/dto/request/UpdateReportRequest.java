package com.kerimsenturk.labreport.dto.request;

import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;

import java.util.Optional;

public record UpdateReportRequest(
        Optional<String> reportId,
        Optional<
                @NotBlank
                @Length(min = 5, max = 50) String> title,
        Optional<
                @NotBlank
                @Length(min = 20, max = 200)String> details) {
}
