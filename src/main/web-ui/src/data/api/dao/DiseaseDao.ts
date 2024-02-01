import {api} from "../api";
import {CreateDiseaseRequest} from "../../../domain/payload/request/CreateDiseaseRequest";

const DOMAIN_BASE_URL = "/diseases"
const diseaseDao = {

    // Define your API endpoints here
    getDiseaseById: (id:number) => api.get(DOMAIN_BASE_URL.concat(`/${id}`)),

    getAllDiseases: () => api.get(DOMAIN_BASE_URL.concat('/getAllDiseases')),

    getActiveDiseases: () => api.get(DOMAIN_BASE_URL.concat('/getActiveDiseases')),

    getDiseasesByDoctorId: (doctorId: string) =>
        api.get(DOMAIN_BASE_URL.concat(`/getDiseasesByDoctorId/${doctorId}`)),

    getDiseaseByPatientId: (patientId : string) =>
        api.get(DOMAIN_BASE_URL.concat(`/getDiseaseByPatientId/${patientId}`)),

    getDiseaseByLabTechnicianId: (labTechnicianId  : string) =>
        api.get(DOMAIN_BASE_URL.concat(`/getDiseaseByLabTechnicianId/${labTechnicianId}`)),

    createDisease: (createDiseaseRequest : CreateDiseaseRequest) =>
        api.post(DOMAIN_BASE_URL.concat('/createDisease'), createDiseaseRequest),

    deletePathologicalReportOf: (diseaseId : number) =>
        api.delete(DOMAIN_BASE_URL.concat(`/deletePathologicalReportOf/${diseaseId}`)),

    deleteDiagnosticReportOf: (diseaseId : number) =>
        api.delete(DOMAIN_BASE_URL.concat(`/deleteDiagnosticReportOf/${diseaseId}`))
};

export default diseaseDao;