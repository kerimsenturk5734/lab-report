
export enum ReportType{
    PATHOLOGICAL = "PATHOLOGICAL",
    DIAGNOSTIC = "DIAGNOSTIC"
}

export class Report {
    private _reportId: string;
    private _title: string;
    private _details: string;
    private _issueDate: Date;
    private _filePath: string;
    private _reportType: ReportType;

    constructor(reportId: string, title: string, details: string,
                issueDate: Date, filePath: string, reportType: ReportType) {
        this._reportId = reportId;
        this._title = title;
        this._details = details;
        this._issueDate = issueDate;
        this._filePath = filePath;
        this._reportType = reportType;
    }

    get reportId(): string {
        return this._reportId;
    }

    set reportId(value: string) {
        this._reportId = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get details(): string {
        return this._details;
    }

    set details(value: string) {
        this._details = value;
    }

    get issueDate(): Date {
        return this._issueDate;
    }

    set issueDate(value: Date) {
        this._issueDate = value;
    }

    get filePath(): string {
        return this._filePath;
    }

    set filePath(value: string) {
        this._filePath = value;
    }

    get reportType(): ReportType {
        return this._reportType;
    }

    set reportType(value: ReportType) {
        this._reportType = value;
    }
}
