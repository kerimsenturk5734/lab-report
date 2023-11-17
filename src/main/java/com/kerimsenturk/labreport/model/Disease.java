package com.kerimsenturk.labreport.model;

import com.kerimsenturk.labreport.model.enums.LabRequestType;
import jakarta.persistence.*;


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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lab_technician_id")
    User labTechnician;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id")
    User doctor;
    @Enumerated(EnumType.STRING)
    @Column(name = "lab_request_type")
    LabRequestType labRequestType;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "pathologic_report_id")
    Report pathologicReport;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "diagnostic_report_id")
    Report diagnosticReport;

    public Disease() {
    }

    public Disease(int id, User patient, User labTechnician, User doctor, LabRequestType labRequestType, Report pathologicReport, Report diagnosticReport) {
        this.id = id;
        this.patient = patient;
        this.labTechnician = labTechnician;
        this.doctor = doctor;
        this.labRequestType = labRequestType;
        this.pathologicReport = pathologicReport;
        this.diagnosticReport = diagnosticReport;
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
}
