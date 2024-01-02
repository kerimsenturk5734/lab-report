package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.model.enums.UserRole;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;

public record CreateUserRequest(
        @NotBlank
        @Length(min = 7, max = 11) //userId has 7 digit for hospital personals, 11 digit for patients.
        @Pattern(regexp = "[0-9]+")
        String userId,

        @NotBlank
        String name,

        @NotBlank
        String surname,

        @NotBlank
        @Length(min = 7, max = 20)
        //TODO: Pattern working but it can not accept any string. I think it is about UTF format. Fix it
        //@Pattern(regexp = "(?=.*?[a-z]+)(?=.*?[A-Z]+)(?=.*?[0-9]+)")
        String password,

        //It may be necessary to create a new EnumValidator Annotation
        UserRole userRole) {

}
