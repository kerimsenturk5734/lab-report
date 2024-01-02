package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.dto.validator.UserIdValid;
import jakarta.validation.constraints.NotBlank;

public record UserLoginRequest(
        @UserIdValid
        String userId,
        @NotBlank
        String password) {
}
