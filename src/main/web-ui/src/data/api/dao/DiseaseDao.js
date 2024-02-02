"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api");
var DOMAIN_BASE_URL = "/diseases";
var diseaseDao = {
    // Define your API endpoints here
    getDiseaseById: function (id) { return api_1.api.get(DOMAIN_BASE_URL.concat("/".concat(id))); },
    getAllDiseases: function () { return api_1.api.get(DOMAIN_BASE_URL.concat('/getAllDiseases')); },
    getActiveDiseases: function () { return api_1.api.get(DOMAIN_BASE_URL.concat('/getActiveDiseases')); },
    getDiseasesByDoctorId: function (doctorId) {
        return api_1.api.get(DOMAIN_BASE_URL.concat("/getDiseasesByDoctorId/".concat(doctorId)));
    },
    getDiseasesByPatientId: function (patientId) {
        return api_1.api.get(DOMAIN_BASE_URL.concat("/getDiseasesByPatientId/".concat(patientId)));
    },
    getDiseasesByLabTechnicianId: function (labTechnicianId) {
        return api_1.api.get(DOMAIN_BASE_URL.concat("/getDiseasesByLabTechnicianId/".concat(labTechnicianId)));
    },
    createDisease: function (createDiseaseRequest) {
        return api_1.api.post(DOMAIN_BASE_URL.concat('/createDisease'), createDiseaseRequest);
    },
    deletePathologicalReportOf: function (diseaseId) {
        return api_1.api.delete(DOMAIN_BASE_URL.concat("/deletePathologicalReportOf/".concat(diseaseId)));
    },
    deleteDiagnosticReportOf: function (diseaseId) {
        return api_1.api.delete(DOMAIN_BASE_URL.concat("/deleteDiagnosticReportOf/".concat(diseaseId)));
    }
};
exports.default = diseaseDao;
