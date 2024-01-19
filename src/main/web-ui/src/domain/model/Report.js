"use strict";
exports.__esModule = true;
exports.Report = exports.ReportType = void 0;
var ReportType;
(function (ReportType) {
    ReportType["PATHOLOGICAL"] = "PATHOLOGICAL";
    ReportType["DIAGNOSTIC"] = "DIAGNOSTIC";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
var Report = /** @class */ (function () {
    function Report(reportId, title, details, issueDate, filePath, reportType) {
        this.reportId = reportId;
        this.title = title;
        this.details = details;
        this.issueDate = issueDate;
        this.filePath = filePath;
        this.reportType = reportType;
    }
    Report.prototype.getReportId = function () {
        return this.reportId;
    };
    Report.prototype.setReportId = function (reportId) {
        this.reportId = reportId;
    };
    Report.prototype.getTitle = function () {
        return this.title;
    };
    Report.prototype.setTitle = function (title) {
        this.title = title;
    };
    Report.prototype.getDetails = function () {
        return this.details;
    };
    Report.prototype.setDetails = function (details) {
        this.details = details;
    };
    Report.prototype.getIssueDate = function () {
        return this.issueDate;
    };
    Report.prototype.setIssueDate = function (issueDate) {
        this.issueDate = issueDate;
    };
    Report.prototype.getFilePath = function () {
        return this.filePath;
    };
    Report.prototype.setFilePath = function (filePath) {
        this.filePath = filePath;
    };
    Report.prototype.getReportType = function () {
        return this.reportType;
    };
    Report.prototype.setReportType = function (reportType) {
        this.reportType = reportType;
    };
    return Report;
}());
exports.Report = Report;
