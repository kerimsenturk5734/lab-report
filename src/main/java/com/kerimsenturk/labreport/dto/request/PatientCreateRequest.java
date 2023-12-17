package com.kerimsenturk.labreport.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;

public record PatientCreateRequest(
        @NotBlank
        @Length(min = 11, max = 11)
        @Pattern(regexp = "[0-9]+")
        String userId,
        @NotBlank
        String name,
        @NotBlank
        String surname,
        @NotBlank
        @Length(min = 7, max = 20)
        String password) {
}
