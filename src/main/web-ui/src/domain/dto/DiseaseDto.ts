import {DiseaseState, LabRequestType} from "../model/Disease";
import {UserDto} from "./UserDto";
import {Report} from "../model/Report";


export class DiseaseDto {
    private _id: number;
    private _patient: UserDto;
    private _labTechnician: UserDto;
    private _doctor: UserDto;
    private _labRequestType: LabRequestType;
    private _pathologicReport: Report;
    private _diagnosticReport: Report;
    private _diseaseState: DiseaseState;
    private _creationDate: Date
    constructor(
        id: number, patient: UserDto, labTechnician: UserDto, doctor: UserDto, labRequestType: LabRequestType,
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

    get patient(): UserDto {
        return this._patient;
    }

    set patient(value: UserDto) {
        this._patient = value;
    }

    get labTechnician(): UserDto {
        return this._labTechnician;
    }

    set labTechnician(value: UserDto) {
        this._labTechnician = value;
    }

    get doctor(): UserDto {
        return this._doctor;
    }

    set doctor(value: UserDto) {
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

