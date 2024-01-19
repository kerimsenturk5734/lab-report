"use strict";
exports.__esModule = true;
exports.LabRequestType = exports.DiseaseState = exports.Disease = void 0;
var LabRequestType;
(function (LabRequestType) {
    LabRequestType["BLOOD_ANALYSIS"] = "BLOOD_ANALYSIS";
    LabRequestType["URINE_TEST"] = "URINE_TEST";
    LabRequestType["BIOPSY"] = "BIOPSY";
})(LabRequestType || (LabRequestType = {}));
exports.LabRequestType = LabRequestType;
var DiseaseState;
(function (DiseaseState) {
    DiseaseState["WAITING_RESULTS"] = "WAITING_RESULTS";
    DiseaseState["PATHOLOGIC_RESULTED"] = "PATHOLOGIC_RESULTED";
    DiseaseState["DIAGNOSTIC_RESULTED"] = "DIAGNOSTIC_RESULTED";
    DiseaseState["UPDATED"] = "UPDATED";
    DiseaseState["DELETED"] = "DELETED";
})(DiseaseState || (DiseaseState = {}));
exports.DiseaseState = DiseaseState;
var Disease = /** @class */ (function () {
    function Disease(id, patient, labTechnician, doctor, labRequestType, pathologicReport, diagnosticReport, diseaseState) {
        this.id = id;
        this.patient = patient;
        this.labTechnician = labTechnician;
        this.doctor = doctor;
        this.labRequestType = labRequestType;
        this.pathologicReport = pathologicReport;
        this.diagnosticReport = diagnosticReport;
        this.diseaseState = diseaseState;
    }
    return Disease;
}());
exports.Disease = Disease;
