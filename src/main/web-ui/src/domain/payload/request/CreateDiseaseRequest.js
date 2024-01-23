"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDiseaseRequest = void 0;
var CreateDiseaseRequest = /** @class */ (function () {
    function CreateDiseaseRequest(patientId, doctorId, labRequestType) {
        this.patientId = patientId;
        this.doctorId = doctorId;
        this.labRequestType = labRequestType;
    }
    return CreateDiseaseRequest;
}());
exports.CreateDiseaseRequest = CreateDiseaseRequest;
