package com.kerimsenturk.labreport.dto.request;

import jakarta.validation.constraints.Pattern;

import java.util.Optional;

public record UpdateUserRequest(
        //User might be change only one field or few, not whole fields.
        //That is why these fields are optional
        Optional<
                @Pattern(
                        regexp = "^([0-9]+){7,11}$",
                        message = "{pattern.unmatched.userId}")String> username,
        Optional<String> name,
        Optional<String> surname,
        Optional<
                @Pattern(
                        regexp = "^(?=.*?[a-z]+)(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,20}$",
                        message = "{pattern.unmatched.password}")String> password) {
}
