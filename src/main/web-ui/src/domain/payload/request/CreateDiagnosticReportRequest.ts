class CreateDiagnosticReportRequest {
    diseaseId: number;
    title: string;
    details: string;

    constructor(diseaseId: number, title: string, details: string) {
        this.diseaseId = diseaseId;
        this.title = title;
        this.details = details;
    }
}
