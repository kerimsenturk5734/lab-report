"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = exports.ReportType = void 0;
var ReportType;
(function (ReportType) {
    ReportType["PATHOLOGICAL"] = "PATHOLOGICAL";
    ReportType["DIAGNOSTIC"] = "DIAGNOSTIC";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
var Report = /** @class */ (function () {
    function Report(reportId, title, details, issueDate, filePath, reportType) {
        this._reportId = reportId;
        this._title = title;
        this._details = details;
        this._issueDate = issueDate;
        this._filePath = filePath;
        this._reportType = reportType;
    }
    Object.defineProperty(Report.prototype, "reportId", {
        get: function () {
            return this._reportId;
        },
        set: function (value) {
            this._reportId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Report.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Report.prototype, "details", {
        get: function () {
            return this._details;
        },
        set: function (value) {
            this._details = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Report.prototype, "issueDate", {
        get: function () {
            return this._issueDate;
        },
        set: function (value) {
            this._issueDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Report.prototype, "filePath", {
        get: function () {
            return this._filePath;
        },
        set: function (value) {
            this._filePath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Report.prototype, "reportType", {
        get: function () {
            return this._reportType;
        },
        set: function (value) {
            this._reportType = value;
        },
        enumerable: false,
        configurable: true
    });
    return Report;
}());
exports.Report = Report;
