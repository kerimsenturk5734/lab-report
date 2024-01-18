import {LabRequestType} from "../../model/Disease";

class CreateDiseaseRequest {
    patientId: string;

    doctorId: string;

    labRequestType: LabRequestType;

    constructor(patientId: string, doctorId: string, labRequestType: LabRequestType) {
        this.patientId = patientId;
        this.doctorId = doctorId;
        this.labRequestType = labRequestType;
    }
}

