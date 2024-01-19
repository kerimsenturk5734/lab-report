import {Report} from "./Report";
import {User} from "./User"

export enum LabRequestType {
    BLOOD_ANALYSIS = "BLOOD_ANALYSIS",
    URINE_TEST = "URINE_TEST",
    BIOPSY = "BIOPSY"
}

export enum DiseaseState {
    WAITING_RESULTS = "WAITING_RESULTS",
    PATHOLOGIC_RESULTED = "PATHOLOGIC_RESULTED",
    DIAGNOSTIC_RESULTED = "DIAGNOSTIC_RESULTED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}


export class Disease {
    id: number;
    patient: User;
    labTechnician: User;
    doctor: User;
    labRequestType: LabRequestType;
    pathologicReport: Report;
    diagnosticReport: Report;
    diseaseState: DiseaseState;

    constructor(
        id: number, patient: User, labTechnician: User, doctor: User, labRequestType: LabRequestType,
        pathologicReport: Report, diagnosticReport: Report, diseaseState: DiseaseState) {

        this.id = id;
        this.patient = patient;
        this.labTechnician = labTechnician;
        this.doctor = doctor;
        this.labRequestType = labRequestType;
        this.pathologicReport = pathologicReport;
        this.diagnosticReport = diagnosticReport;
        this.diseaseState = diseaseState;
    }
}

