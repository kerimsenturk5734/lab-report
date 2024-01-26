"use strict";
exports.__esModule = true;
var api_1 = require("../api");
var DOMAIN_BASE_URL = "/diseases";
var diseaseDao = {
    // Define your API endpoints here
    getDiseaseById: function (id) { return api_1.api.get(DOMAIN_BASE_URL.concat("/".concat(id))); },
    getAllDiseases: function () { return api_1.api.get(DOMAIN_BASE_URL.concat('/getAllDiseases')); },
    getDiseasesByDoctorId: function (doctorId) {
        return api_1.api.get(DOMAIN_BASE_URL.concat("/getDiseasesByDoctorId/".concat(doctorId)));
    },
    getDiseaseByPatientId: function (patientId) {
        return api_1.api.get(DOMAIN_BASE_URL.concat("/getDiseaseByPatientId/".concat(patientId)));
    },
    getDiseaseByLabTechnicianId: function (labTechnicianId) {
        return api_1.api.get(DOMAIN_BASE_URL.concat("/getDiseaseByLabTechnicianId/".concat(labTechnicianId)));
    },
    createDisease: function (createDiseaseRequest) {
        return api_1.api.post(DOMAIN_BASE_URL.concat('/createDisease'), createDiseaseRequest);
    },
    deletePathologicReportOf: function (diseaseId) {
        return api_1.api["delete"](DOMAIN_BASE_URL.concat("/deletePathologicReportOf/".concat(diseaseId)));
    },
    deleteDiagnosticReportOf: function (diseaseId) {
        return api_1.api["delete"](DOMAIN_BASE_URL.concat("/deleteDiagnosticReportOf/".concat(diseaseId)));
    }
};
exports["default"] = diseaseDao;