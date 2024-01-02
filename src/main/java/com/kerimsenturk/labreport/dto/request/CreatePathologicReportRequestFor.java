package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.dto.validator.HospitalPersonalIdValid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.NumberFormat;

public record CreatePathologicReportRequestFor(
        @NotNull
        @NumberFormat
        int diseaseId,
        @HospitalPersonalIdValid
        String labTechnicianId,
        @NotBlank
        @Length(min = 5, max = 50)
        String title,
        @NotBlank
        @Length(min = 20, max = 200)
        String details) {
}
