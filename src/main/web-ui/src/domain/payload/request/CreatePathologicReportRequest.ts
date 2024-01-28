export class CreatePathologicReportRequest {
    diseaseId: number;

    labTechnicianId: string;

    title: string;

    details: string;

    constructor(
        diseaseId: number,
        labTechnicianId: string,
        title: string,
        details: string
    ) {
        this.diseaseId = diseaseId;
        this.labTechnicianId = labTechnicianId;
        this.title = title;
        this.details = details;
    }
}
