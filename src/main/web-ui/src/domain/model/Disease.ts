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
    PATHOLOGIC_UPDATED = "PATHOLOGIC_UPDATED",
    DIAGNOSTIC_UPDATED = "DIAGNOSTIC_UPDATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}


export class Disease {
    private _id: number;
    private _patient: User;
    private _labTechnician: User;
    private _doctor: User;
    private _labRequestType: LabRequestType;
    private _pathologicReport: Report;
    private _diagnosticReport: Report;
    private _diseaseState: DiseaseState;
    private _creationDate: Date
    constructor(
        id: number, patient: User, labTechnician: User, doctor: User, labRequestType: LabRequestType,
        pathologicReport: Report, diagnosticReport: Report, diseaseState: DiseaseState, creationDate: Date) {

        this._id = id;
        this._patient = patient;
        this._labTechnician = labTechnician;
        this._doctor = doctor;
        this._labRequestType = labRequestType;
        this._pathologicReport = pathologicReport;
        this._diagnosticReport = diagnosticReport;
        this._diseaseState = diseaseState;
        this._creationDate = creationDate
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get patient(): User {
        return this._patient;
    }

    set patient(value: User) {
        this._patient = value;
    }

    get labTechnician(): User {
        return this._labTechnician;
    }

    set labTechnician(value: User) {
        this._labTechnician = value;
    }

    get doctor(): User {
        return this._doctor;
    }

    set doctor(value: User) {
        this._doctor = value;
    }

    get labRequestType(): LabRequestType {
        return this._labRequestType;
    }

    set labRequestType(value: LabRequestType) {
        this._labRequestType = value;
    }

    get pathologicReport(): Report {
        return this._pathologicReport;
    }

    set pathologicReport(value: Report) {
        this._pathologicReport = value;
    }

    get diagnosticReport(): Report {
        return this._diagnosticReport;
    }

    set diagnosticReport(value: Report) {
        this._diagnosticReport = value;
    }

    get diseaseState(): DiseaseState {
        return this._diseaseState;
    }

    set diseaseState(value: DiseaseState) {
        this._diseaseState = value;
    }

    get creationDate(): Date {
        return this._creationDate;
    }

    set creationDate(value: Date) {
        this._creationDate = value;
    }
}

