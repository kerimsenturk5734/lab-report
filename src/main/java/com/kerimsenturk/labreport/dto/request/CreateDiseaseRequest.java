package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.model.enums.LabRequestType;

public record CreateDiseaseRequest(
        String patientId,
        String doctorId,
        LabRequestType labRequestType) {
}
