import {api} from "../api";

import {CreateDiagnosticReportRequest} from "../../../domain/payload/request/CreateDiagnosticReportRequest";
import {CreatePathologicReportRequest} from "../../../domain/payload/request/CreatePathologicReportRequestFor";
import {UpdateReportRequest} from "../../../domain/payload/request/UpdateReportRequest";

const DOMAIN_BASE_URL = "/reports"
const reportDao = {

    // Define your API endpoints here
    downloadReport: (reportId:string) => api.get(DOMAIN_BASE_URL.concat(`/downloadReport/?reportId=${reportId}`)),

    getAllReports: () => api.get(DOMAIN_BASE_URL.concat('/getAllReports')),

    createDiagnosticReportFor: (createDiagnosticReportRequest: CreateDiagnosticReportRequest) =>
        api.post(DOMAIN_BASE_URL.concat('/createDiagnosticReportFor'), createDiagnosticReportRequest),

    createPathologicReportFor: (createPathologicReportRequest : CreatePathologicReportRequest) =>
        api.post(DOMAIN_BASE_URL.concat('/createPathologicReportFor'), createPathologicReportRequest),

    updateReport: (updateReportRequest : UpdateReportRequest) =>
        api.put(DOMAIN_BASE_URL.concat('/updateReport'), updateReportRequest),

};

export default reportDao;