"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePathologicReportRequest = void 0;
var CreatePathologicReportRequest = /** @class */ (function () {
    function CreatePathologicReportRequest(diseaseId, labTechnicianId, title, details) {
        this.diseaseId = diseaseId;
        this.labTechnicianId = labTechnicianId;
        this.title = title;
        this.details = details;
    }
    return CreatePathologicReportRequest;
}());
exports.CreatePathologicReportRequest = CreatePathologicReportRequest;
