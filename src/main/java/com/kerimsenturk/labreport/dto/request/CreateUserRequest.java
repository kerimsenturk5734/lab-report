package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.model.enums.UserRole;

public record CreateUserRequest(
        String userId,
        String name,
        String surname,
        String password,
        UserRole userRole) {

}
