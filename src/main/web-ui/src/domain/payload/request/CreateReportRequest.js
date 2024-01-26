"use strict";
exports.__esModule = true;
exports.CreateReportRequest = void 0;
var CreateReportRequest = /** @class */ (function () {
    function CreateReportRequest(patientId, title, details, reportType) {
        this.patientId = patientId;
        this.title = title;
        this.details = details;
        this.reportType = reportType;
    }
    return CreateReportRequest;
}());
exports.CreateReportRequest = CreateReportRequest;
