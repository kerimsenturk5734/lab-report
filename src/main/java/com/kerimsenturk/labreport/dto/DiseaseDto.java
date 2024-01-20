package com.kerimsenturk.labreport.dto;

import com.kerimsenturk.labreport.model.enums.DiseaseState;
import com.kerimsenturk.labreport.model.enums.LabRequestType;

import java.time.LocalDateTime;

public class DiseaseDto {
    int id;
    UserDto patient;
    UserDto labTechnician;
    UserDto doctor;
    LabRequestType labRequestType;
    ReportDto pathologicReport;
    ReportDto diagnosticReport;
    DiseaseState diseaseState;
    LocalDateTime creationDate = LocalDateTime.now();

    public DiseaseDto() {
    }

    public DiseaseDto(int id, UserDto patient, UserDto labTechnician, UserDto doctor,
                      LabRequestType labRequestType, ReportDto pathologicReport,
                      ReportDto diagnosticReport, DiseaseState diseaseState, LocalDateTime creationDate) {
        this.id = id;
        this.patient = patient;
        this.labTechnician = labTechnician;
        this.doctor = doctor;
        this.labRequestType = labRequestType;
        this.pathologicReport = pathologicReport;
        this.diagnosticReport = diagnosticReport;
        this.diseaseState = diseaseState;
        this.creationDate = creationDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public UserDto getPatient() {
        return patient;
    }

    public void setPatient(UserDto patient) {
        this.patient = patient;
    }

    public UserDto getLabTechnician() {
        return labTechnician;
    }

    public void setLabTechnician(UserDto labTechnician) {
        this.labTechnician = labTechnician;
    }

    public UserDto getDoctor() {
        return doctor;
    }

    public void setDoctor(UserDto doctor) {
        this.doctor = doctor;
    }

    public LabRequestType getLabRequestType() {
        return labRequestType;
    }

    public void setLabRequestType(LabRequestType labRequestType) {
        this.labRequestType = labRequestType;
    }

    public ReportDto getPathologicReport() {
        return pathologicReport;
    }

    public void setPathologicReport(ReportDto pathologicReport) {
        this.pathologicReport = pathologicReport;
    }

    public ReportDto getDiagnosticReport() {
        return diagnosticReport;
    }

    public void setDiagnosticReport(ReportDto diagnosticReport) {
        this.diagnosticReport = diagnosticReport;
    }

    public DiseaseState getDiseaseState() {
        return diseaseState;
    }

    public void setDiseaseState(DiseaseState diseaseState) {
        this.diseaseState = diseaseState;
    }
    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }
}
