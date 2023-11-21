package com.kerimsenturk.labreport.dto.request;

public record PatientCreateRequest(
        String userId,
        String name,
        String surname,
        String password) {
}
