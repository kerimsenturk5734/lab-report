package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.model.enums.UserRole;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;

public record CreateUserRequest(
        @NotBlank
        @NotEmpty
        @Length(min = 7, max = 11) //userId has 7 digit for hospital personals, 11 digit for patients.
        @Pattern(regexp = "[0-9]+")
        String userId,

        @NotBlank
        @NotEmpty
        String name,

        @NotBlank
        @NotEmpty
        String surname,

        @NotBlank
        @NotEmpty
        @Length(min = 7, max = 20)
        //Pattern working but it can not accept any string. I think it is about UTF format
        //@Pattern(regexp = "(?=.*?[a-z]+)(?=.*?[A-Z]+)(?=.*?[0-9]+)")
        String password,

        //It may be necessary to create a new EnumValidator Annotation
        UserRole userRole) {

}
