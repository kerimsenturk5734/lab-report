package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.model.enums.LabRequestType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;

public record CreateDiseaseRequest(
        @NotBlank
        @Length(min = 11, max = 11, message = "length must be 11 digit")
        @Pattern(regexp = "[0-9]+")
        String patientId,
        @NotBlank
        @Length(min = 7, max = 7, message = "length must be 7 digit")
        @Pattern(regexp = "[0-9]+")
        String doctorId,
        LabRequestType labRequestType) {
}
