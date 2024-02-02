import React, {useEffect, useState} from 'react';
import {MDBCard} from "mdb-react-ui-kit";
import PdfViewModal from "./modals/PdfViewModal";
import {LocalStorageManager} from "../../util/localStorageManager";
import {useGetDiseasesByLabTechnicianId} from "../../domain/usecase/disease/GetDiseasesByLabTechnicianIdUseCase";
import {toast} from "react-toastify";
import {Report, ReportType} from "../../domain/model/Report"
import {DiseaseDto} from "../../domain/dto/DiseaseDto";
import {jsonBeautifier} from "../../util/JsonBeautifier";
import {useGetReportById} from "../../domain/usecase/report/GetReportByIdUseCase";
import UpdateReportModal from "./modals/UpdateReportModal";
import AreYouSureModal from "./modals/AreYouSureModal";
import {useDeletePathologicalReportOf} from "../../domain/usecase/disease/DeletePathologicalReportOfUseCase";
import {useDownloadReport} from "../../domain/usecase/report/DownloadReportUseCase";

function MyReports() {
    const user = LocalStorageManager.loadUser()
    const {state, getDiseasesByLabTechnicianId} = useGetDiseasesByLabTechnicianId()

    useEffect(() => {
        getDiseasesByLabTechnicianId(user.userId)
    }, []);

    useEffect(() => {
        if(state.successMessage.length > 0){
            toast.info(`${state.data.length} reports founded`, {theme:'colored', position:'bottom-left'})
            state.successMessage = ''
        }
    }, [state.successMessage]);

    useEffect(() => {
        if(state.errorMessage.length > 0){
            toast.error(state.errorMessage, {theme:'colored', position:'top-left'})
            state.errorMessage = ''
        }

    }, [state.errorMessage]);

    return (
        <div>
            <div className={"d-flex row justify-content-center"}>
                <div className={"row text-black-50"}>
                    {
                        state.isLoading ?
                            <></>
                            :
                            state.data.map((item: DiseaseDto) => {
                                return (
                                    <ReportCard disease={item}
                                                isReportProcessed={(item.diagnosticReport !== null)}/>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    );
}

function ReportCard({disease, isReportProcessed}){
    const {state, getReportById} = useGetReportById()
    const {state:deleteState, deletePathologicalReportOf} = useDeletePathologicalReportOf()
    const {downloadReport} = useDownloadReport()

    const [report, setReport] = useState(new Report())

    const [pdfViewModalIsOpen, setPdfViewModalIsOpen] = useState(false);
    const [updateReportModalIsOpen, setUpdateReportModalIsOpen] = useState(false)
    const [deleteDiseaseModalIsOpen, setDeleteDiseaseModalIsOpen] = useState(false)

    useEffect(() => {
        getReportById(disease.pathologicReport.reportId)
    }, []);

    useEffect(() => {
        if(state.successMessage.length > 0){
            setReport(state.data)
        }
    }, [state.successMessage]);

    useEffect(() => {
        if(state.errorMessage.length > 0){
            toast.error(state.errorMessage, {theme:'colored', position:'top-left'})
            state.errorMessage = ''
        }
    }, [state.errorMessage]);

    useEffect(() => {
        if(deleteState.successMessage.length > 0){
            toast.success(deleteState.successMessage, {theme:'colored', position:'top-left'})
            deleteState.successMessage = ''
            closeDeleteDiseaseModal()
            setTimeout(()=>{window.location.reload()}, 1500)
        }
    }, [deleteState.successMessage]);

    useEffect(() => {
        if(deleteState.errorMessage.length > 0){
            toast.error(deleteState.errorMessage, {theme:'colored', position:'top-left'})
            deleteState.errorMessage = ''
        }
    }, [deleteState.errorMessage]);

    const showUpdateReportModal = () => {
        setUpdateReportModalIsOpen(true);
    };
    const closeUpdateReportModal = () => {
        setUpdateReportModalIsOpen(false);
    };
    const showDeleteDiseaseModal = () => {
        setDeleteDiseaseModalIsOpen(true)
    }
    const closeDeleteDiseaseModal = () => {
        setDeleteDiseaseModalIsOpen(false)
    }

    const deletePathologicReport = () => {
        deletePathologicalReportOf(disease.id)
    }

    const showPdfViewModal = () => {
        setPdfViewModalIsOpen(true);
    };
    const closePdfViewModal = () => {
        setPdfViewModalIsOpen(false);
    };

    const handleDownloadReport = () => {
        downloadReport(report?.reportId)
    }

    return (
        <MDBCard className={"col-2 p-3 m-3 gap-2"}>
            <div className={"d-flex justify-content-center"}>
                <i className="fa fa-solid fa-file fa-7x"></i>
            </div>
            <div className={"d-flex justify-content-around"}>
                <h6 className={"text-black-50"}>
                    <span>{disease?.patient?.name} {disease?.patient?.surname} </span>
                    <i className="fa fa-solid fa-user "> </i>
                </h6>
            </div>
            <div className={"d-flex justify-content-around"}>
                <h6 className={"text-black-50"}>
                    <span>{jsonBeautifier.beautifyDate(report?.issueDate)} </span>
                    <i className="fa fa-solid fa-calendar "> </i>
                </h6>
            </div>
            <hr className={"m-0"}/>
            <div className={"d-flex justify-content-evenly"}>

                <button type="button"
                        className="btn btn-dark btn-outline-black btn-sm px-3"
                        onClick={showPdfViewModal}>

                    <i className="fa fa-solid fa-tv"> View</i>
                </button>
                <button type="button" className="btn btn-dark btn-outline-primary btn-sm px-3"
                        onClick={handleDownloadReport}>

                    <i className="fa fa-solid fa-download"> Download</i>
                </button>
            </div>

            <div className={"d-flex justify-content-evenly"}
                 title={isReportProcessed ? "You can't action because this report processed by the doctor" : ""}>

                <button type="button" className="btn btn-dark btn-outline-warning btn-sm px-3"
                        onClick={showUpdateReportModal}
                        disabled={isReportProcessed}>

                    <i className="fa fa-solid fa-arrow-circle-right"> Update</i>
                </button>
                <button type="button"
                        className="btn btn-dark btn-outline-danger btn-sm px-3"
                        onClick={showDeleteDiseaseModal} disabled={isReportProcessed}>

                    <i className="fa fa-solid fa-trash"> Delete</i>
                </button>
            </div>
            <AreYouSureModal open={deleteDiseaseModalIsOpen}
                             question={jsonBeautifier.buildDeleteReportQuestion(disease, ReportType.PATHOLOGICAL)}
                             onConfirm={deletePathologicReport}
                             onCancel={closeDeleteDiseaseModal}/>

            <UpdateReportModal open={updateReportModalIsOpen}
                               onCancel={closeUpdateReportModal}
                               report={disease.pathologicReport}/>

            <PdfViewModal reportId={disease.pathologicReport.reportId}
                          open={pdfViewModalIsOpen}
                          onCLose={closePdfViewModal}/>
        </MDBCard>
    )
}

export default MyReports;