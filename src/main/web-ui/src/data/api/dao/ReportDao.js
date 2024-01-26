"use strict";
exports.__esModule = true;
var api_1 = require("../api");
var DOMAIN_BASE_URL = "/reports";
var reportDao = {
    // Define your API endpoints here
    downloadReport: function (reportId) { return api_1.api.get(DOMAIN_BASE_URL.concat("/downloadReport/?reportId=".concat(reportId))); },
    getAllReports: function () { return api_1.api.get(DOMAIN_BASE_URL.concat('/getAllReports')); },
    createDiagnosticReportFor: function (createDiagnosticReportRequest) {
        return api_1.api.post(DOMAIN_BASE_URL.concat('/createDiagnosticReportFor'), createDiagnosticReportRequest);
    },
    createPathologicReportFor: function (createPathologicReportRequest) {
        return api_1.api.post(DOMAIN_BASE_URL.concat('/createPathologicReportFor'), createPathologicReportRequest);
    },
    updateReport: function (updateReportRequest) {
        return api_1.api.put(DOMAIN_BASE_URL.concat('/updateReport'), updateReportRequest);
    }
};
exports["default"] = reportDao;