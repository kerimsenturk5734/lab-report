"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api");
var DOMAIN_BASE_URL = "/reports";
var reportDao = {
    // Define your API endpoints here
    getReportById: function (reportId) { return api_1.api.get(DOMAIN_BASE_URL.concat("/".concat(reportId))); },
    getReportBlobById: function (reportId) {
        return api_1.api.get(DOMAIN_BASE_URL.concat("/downloadReport/".concat(reportId)), { responseType: 'blob' });
    },
    getAllReports: function () { return api_1.api.get(DOMAIN_BASE_URL.concat('/getAllReports')); },
    createDiagnosticReportFor: function (createDiagnosticReportRequest) {
        return api_1.api.post(DOMAIN_BASE_URL.concat('/createDiagnosticReportFor'), createDiagnosticReportRequest);
    },
    createPathologicReportFor: function (createPathologicReportRequest) {
        return api_1.api.post(DOMAIN_BASE_URL.concat('/createPathologicalReportFor'), createPathologicReportRequest);
    },
    updatePathologicReport: function (updateReportRequest) {
        return api_1.api.put(DOMAIN_BASE_URL.concat('/updatePathologicReport'), updateReportRequest);
    },
    updateDiagnosticReport: function (updateReportRequest) {
        return api_1.api.put(DOMAIN_BASE_URL.concat('/updateDiagnosticReport'), updateReportRequest);
    },
};
exports.default = reportDao;
