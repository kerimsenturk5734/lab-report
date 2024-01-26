"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiseaseDto = void 0;
var DiseaseDto = /** @class */ (function () {
    function DiseaseDto(id, patient, labTechnician, doctor, labRequestType, pathologicReport, diagnosticReport, diseaseState, creationDate) {
        this._id = id;
        this._patient = patient;
        this._labTechnician = labTechnician;
        this._doctor = doctor;
        this._labRequestType = labRequestType;
        this._pathologicReport = pathologicReport;
        this._diagnosticReport = diagnosticReport;
        this._diseaseState = diseaseState;
        this._creationDate = creationDate;
    }
    Object.defineProperty(DiseaseDto.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiseaseDto.prototype, "patient", {
        get: function () {
            return this._patient;
        },
        set: function (value) {
            this._patient = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiseaseDto.prototype, "labTechnician", {
        get: function () {
            return this._labTechnician;
        },
        set: function (value) {
            this._labTechnician = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiseaseDto.prototype, "doctor", {
        get: function () {
            return this._doctor;
        },
        set: function (value) {
            this._doctor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiseaseDto.prototype, "labRequestType", {
        get: function () {
            return this._labRequestType;
        },
        set: function (value) {
            this._labRequestType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiseaseDto.prototype, "pathologicReport", {
        get: function () {
            return this._pathologicReport;
        },
        set: function (value) {
            this._pathologicReport = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiseaseDto.prototype, "diagnosticReport", {
        get: function () {
            return this._diagnosticReport;
        },
        set: function (value) {
            this._diagnosticReport = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiseaseDto.prototype, "diseaseState", {
        get: function () {
            return this._diseaseState;
        },
        set: function (value) {
            this._diseaseState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DiseaseDto.prototype, "creationDate", {
        get: function () {
            return this._creationDate;
        },
        set: function (value) {
            this._creationDate = value;
        },
        enumerable: false,
        configurable: true
    });
    return DiseaseDto;
}());
exports.DiseaseDto = DiseaseDto;
