package com.kerimsenturk.labreport.dto.request;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.NumberFormat;

public record CreateDiagnosticReportRequestFor(
        @NotNull
        @NumberFormat
        int diseaseId,
        @NotBlank
        @Length(min = 5, max = 50)
        String title,
        @NotBlank
        @Length(min = 20, max = 500)
        String details) {
}
