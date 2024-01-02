package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.dto.validator.PatientIdValid;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;

public record PatientCreateRequest(
        @PatientIdValid
        String userId,
        @NotBlank
        String name,
        @NotBlank
        String surname,
        @NotBlank
        @Length(min = 7, max = 20)
        String password) {
}
