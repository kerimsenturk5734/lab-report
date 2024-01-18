
export enum ReportType{
    PATHOLOGICAL = "PATHOLOGICAL",
    DIAGNOSTIC = "DIAGNOSTIC"
}

export class Report {
    reportId: string;
    title: string;
    details: string;
    issueDate: Date;
    filePath: string;
    reportType: ReportType;

    constructor(reportId: string, title: string, details: string,
                issueDate: Date, filePath: string, reportType: ReportType) {
        this.reportId = reportId;
        this.title = title;
        this.details = details;
        this.issueDate = issueDate;
        this.filePath = filePath;
        this.reportType = reportType;
    }

    getReportId(): string {
        return this.reportId;
    }

    setReportId(reportId: string): void {
        this.reportId = reportId;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getDetails(): string {
        return this.details;
    }

    setDetails(details: string): void {
        this.details = details;
    }

    getIssueDate(): Date {
        return this.issueDate;
    }

    setIssueDate(issueDate: Date): void {
        this.issueDate = issueDate;
    }

    getFilePath(): string {
        return this.filePath;
    }

    setFilePath(filePath: string): void {
        this.filePath = filePath;
    }

    getReportType(): ReportType {
        return this.reportType;
    }

    setReportType(reportType: ReportType): void {
        this.reportType = reportType;
    }
}
