class UpdateReportRequest {
    reportId?: string;
    title?: string;
    details?: string;

    constructor(reportId?: string, title?: string, details?: string) {
        this.reportId = reportId;
        this.title = title;
        this.details = details;
    }
}
