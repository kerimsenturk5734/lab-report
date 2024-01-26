package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.dto.validator.PatientIdValid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;

public record PatientCreateRequest(
        @PatientIdValid
        String userId,
        @NotBlank
        String name,
        @NotBlank
        String surname,
        @NotBlank
        @Pattern(
                regexp = "^(?=.*?[a-z]+)(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,20}$",
                message = "{pattern.unmatched.password}")
        String password) {
}
