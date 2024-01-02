package com.kerimsenturk.labreport.dto.request;

import com.kerimsenturk.labreport.dto.validator.HospitalPersonalIdValid;
import com.kerimsenturk.labreport.dto.validator.PatientIdValid;
import com.kerimsenturk.labreport.model.enums.LabRequestType;


public record CreateDiseaseRequest(
        @PatientIdValid
        String patientId,
        @HospitalPersonalIdValid
        String doctorId,
        LabRequestType labRequestType) {
}
