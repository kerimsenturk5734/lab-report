"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disease = exports.DiseaseState = exports.LabRequestType = void 0;
var LabRequestType;
(function (LabRequestType) {
    LabRequestType["BLOOD_ANALYSIS"] = "BLOOD_ANALYSIS";
    LabRequestType["URINE_TEST"] = "URINE_TEST";
    LabRequestType["BIOPSY"] = "BIOPSY";
})(LabRequestType = exports.LabRequestType || (exports.LabRequestType = {}));
var DiseaseState;
(function (DiseaseState) {
    DiseaseState["WAITING_RESULTS"] = "WAITING_RESULTS";
    DiseaseState["PATHOLOGIC_RESULTED"] = "PATHOLOGIC_RESULTED";
    DiseaseState["DIAGNOSTIC_RESULTED"] = "DIAGNOSTIC_RESULTED";
    DiseaseState["UPDATED"] = "UPDATED";
    DiseaseState["DELETED"] = "DELETED";
})(DiseaseState = exports.DiseaseState || (exports.DiseaseState = {}));
var Disease = /** @class */ (function () {
    function Disease(id, patient, labTechnician, doctor, labRequestType, pathologicReport, diagnosticReport, diseaseState, creationDate) {
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
    Object.defineProperty(Disease.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disease.prototype, "patient", {
        get: function () {
            return this._patient;
        },
        set: function (value) {
            this._patient = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disease.prototype, "labTechnician", {
        get: function () {
            return this._labTechnician;
        },
        set: function (value) {
            this._labTechnician = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disease.prototype, "doctor", {
        get: function () {
            return this._doctor;
        },
        set: function (value) {
            this._doctor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disease.prototype, "labRequestType", {
        get: function () {
            return this._labRequestType;
        },
        set: function (value) {
            this._labRequestType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disease.prototype, "pathologicReport", {
        get: function () {
            return this._pathologicReport;
        },
        set: function (value) {
            this._pathologicReport = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disease.prototype, "diagnosticReport", {
        get: function () {
            return this._diagnosticReport;
        },
        set: function (value) {
            this._diagnosticReport = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disease.prototype, "diseaseState", {
        get: function () {
            return this._diseaseState;
        },
        set: function (value) {
            this._diseaseState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disease.prototype, "creationDate", {
        get: function () {
            return this._creationDate;
        },
        set: function (value) {
            this._creationDate = value;
        },
        enumerable: false,
        configurable: true
    });
    return Disease;
}());
exports.Disease = Disease;
