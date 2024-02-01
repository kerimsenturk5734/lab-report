package com.kerimsenturk.labreport.model;

import com.kerimsenturk.labreport.model.enums.DiseaseState;
import com.kerimsenturk.labreport.model.enums.LabRequestType;
import jakarta.persistence.*;

import java.time.LocalDateTime;


@Entity
@Table(name = "diseases")
public class Disease {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    User patient;
    @ManyToOne(cascade=CascadeType.REFRESH, fetch = FetchType.LAZY)
    @JoinColumn(name = "lab_technician_id")
    User labTechnician;
    @ManyToOne(cascade=CascadeType.REFRESH, fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id")
    User doctor;
    @Enumerated(EnumType.STRING)
    @Column(name = "lab_request_type")
    LabRequestType labRequestType;
    @OneToOne(cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "pathologic_report_id")
    Report pathologicReport;
    @OneToOne(cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "diagnostic_report_id")
    Report diagnosticReport;
    @Enumerated(EnumType.STRING)
    @Column(name = "disease_state")
    DiseaseState diseaseState;
    @Column(name = "creation_date", columnDefinition = "TIMESTAMP")
    LocalDateTime creationDate = LocalDateTime.now();

    public Disease() {
    }

    public Disease(int id, User patient, User labTechnician, User doctor,
                   LabRequestType labRequestType, Report pathologicReport,
                   Report diagnosticReport, DiseaseState diseaseState, LocalDateTime creationDate) {
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

    public User getPatient() {
        return patient;
    }

    public void setPatient(User patient) {
        this.patient = patient;
    }

    public User getLabTechnician() {
        return labTechnician;
    }

    public void setLabTechnician(User labTechnician) {
        this.labTechnician = labTechnician;
    }

    public User getDoctor() {
        return doctor;
    }

    public void setDoctor(User doctor) {
        this.doctor = doctor;
    }

    public LabRequestType getLabRequestType() {
        return labRequestType;
    }

    public void setLabRequestType(LabRequestType labRequestType) {
        this.labRequestType = labRequestType;
    }

    public Report getPathologicReport() {
        return pathologicReport;
    }

    public void setPathologicReport(Report pathologicReport) {
        this.pathologicReport = pathologicReport;
    }

    public Report getDiagnosticReport() {
        return diagnosticReport;
    }

    public void setDiagnosticReport(Report diagnosticReport) {
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
