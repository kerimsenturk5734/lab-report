import {ReportType} from "../../model/Report";

class CreateReportRequest {
    patientId: string;

    title: string;
    details: string;
    reportType: ReportType;

    constructor(patientId: string, title: string, details: string, reportType: ReportType) {
        this.patientId = patientId;
        this.title = title;
        this.details = details;
        this.reportType = reportType;
    }
}