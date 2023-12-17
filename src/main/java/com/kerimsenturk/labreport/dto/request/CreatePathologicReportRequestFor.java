package com.kerimsenturk.labreport.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.NumberFormat;

public record CreatePathologicReportRequestFor(
        @NotNull
        @NumberFormat
        int diseaseId,
        @NotBlank
        @Length(min = 7, max = 7, message = "length must be 7 digit")
        @Pattern(regexp = "[0-9]+")
        String labTechnicianId,
        @NotBlank
        @Length(min = 5, max = 50)
        String title,
        @NotBlank
        @Length(min = 20, max = 200)
        String details) {
}
