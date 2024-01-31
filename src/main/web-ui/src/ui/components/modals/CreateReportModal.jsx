import React, {useEffect, useState} from 'react';
import {ReportType} from "../../../domain/model/Report";
import CustomModal from "./CustomModal";
import {useCreatePathologicReportFor} from "../../../domain/usecase/report/CreatePathologicReportFor";
import {useCreateDiagnosticReportFor} from "../../../domain/usecase/report/CreateDiagnosticReportFor";
import {MDBInput, MDBTextArea} from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import {jsonBeautifier} from "../../../util/JsonBeautifier";
import {CreatePathologicReportRequest} from "../../../domain/payload/request/CreatePathologicReportRequest";
import {CreateDiagnosticReportRequest} from "../../../domain/payload/request/CreateDiagnosticReportRequest";
import {LocalStorageManager} from "../../../util/localStorageManager";

/**
* @property {ReportType} reportType - The type of the report.
* @property {function} onConfirm - Callback function when the user confirms.
* @property {function} onCancel - Callback function when the user cancels.
*/

function CreateReportModal({open, onCancel, reportType, diseaseId}) {
    const {state, createReport} = (reportType === ReportType.PATHOLOGICAL) ?
        useCreatePathologicReportFor() : useCreateDiagnosticReportFor()

    const [titleInput, setTitleInput] = useState('');
    const [detailsInput, setDetailsInput] = useState('');
    const modalTitle =
        (reportType === ReportType.PATHOLOGICAL) ? "Create Pathologic Report" : "Create Diagnostic Report"

    const handleTitleInputChange = (e) => {
        const input = e.target.value;
        setTitleInput(input);
    };

    const handleDetailsInputChange = (e) => {
        const input = e.target.value;
        setDetailsInput(input);
    };

    const textAreaMaxLength = 500
    const textAreaStyle = {
        maxHeight:'150px',
        minHeight:'38px',
        resize:'none',
    };

    const handleCreateReport = () => {
        createReport(buildPayload())
    }

    const buildPayload = () => {
        if(reportType === ReportType.PATHOLOGICAL)
            return new CreatePathologicReportRequest(diseaseId, LocalStorageManager.loadUser()?.userId, titleInput, detailsInput)
        else
            return new CreateDiagnosticReportRequest(diseaseId, titleInput, detailsInput)
    }

    useEffect(() => {
        if(state.successMessage.length > 0){
            let toastOptions =
                {position:'top-left', hideProgressBar: true, theme:'colored'}
            toast.success(jsonBeautifier.getPreOfJson(state.successMessage), toastOptions)
            state.successMessage = ''

            setTimeout(()=>{window.location.reload()}, 2000)
        }
    }, [state.successMessage]);

    useEffect(() => {
        if(state.errorMessage.length > 0){
            let toastOptions =
                {position:'top-left', hideProgressBar: true, theme:'colored', style:{width:'400px'}}
            toast.error(jsonBeautifier.getPreOfJson(state.errorMessage), toastOptions)
            state.errorMessage = ''
        }
    }, [state.errorMessage]);

    return (
        <CustomModal open={open} onClose={onCancel}>
            <div className={"d-flex row gap-2 p-3 justify-content-center my-2 mx-5 w-75 w-responsive"}>
                {
                    state.isLoading ?
                        <div style={{width: "3rem", height: "3rem"}} className="spinner-border text-primary"
                             role="status">
                            <span className="visually-hidden">creating...</span>
                        </div>
                        :
                        <>
                            <div className={"d-flex justify-content-center "}>
                                {
                                    (reportType === ReportType.PATHOLOGICAL) ?
                                        <img src="https://cdn-icons-png.flaticon.com/512/7622/7622915.png"
                                             className={"w-responsive w-25"}
                                             alt={"create_report"}/>
                                        :
                                        <img src="https://cdn-icons-png.flaticon.com/512/12237/12237109.png"
                                             className={"w-responsive w-25"}
                                             alt={"create_report"}/>
                                }

                            </div>
                            <div className={"d-flex justify-content-center"}>
                               <span className={"text-xx-large text-black-50"}>
                                        {modalTitle}
                               </span>
                            </div>
                            <MDBInput
                                type="text"
                                className="form-control"
                                label={"Report Title"}
                                value={titleInput}
                                maxLength={50}
                                onChange={handleTitleInputChange}
                            />

                            <MDBTextArea
                                style={textAreaStyle}
                                label="Report Content"
                                rows={5}
                                maxLength={textAreaMaxLength}
                                value={detailsInput}
                                onChange={handleDetailsInputChange}
                            />
                            <div className={"d-flex justify-content-end"}>
                                <span>{detailsInput.length}/{textAreaMaxLength}</span>
                            </div>

                            <div className={"d-flex justify-content-end gap-2 mt-5"}>
                                <button type="button"
                                        className={`btn btn-dark btn-sm btn-outline-success`}
                                        onClick={handleCreateReport}>

                                    <i className="fa fa-solid outline fa-plus"> Create Report </i>
                                </button>
                                <button type="button"
                                        className="btn btn-dark btn-outline-danger btn-sm"
                                        onClick={onCancel}>

                                    <i className="fa fa-solid fa-window-close"> Cancel</i>
                                </button>
                            </div>
                        </>
                }
            </div>
        </CustomModal>
    );
}

export default CreateReportModal;