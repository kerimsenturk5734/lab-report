import React, {useEffect, useState} from 'react';
import {ReportType} from "../../../domain/model/Report";
import CustomModal from "./CustomModal";
import {MDBInput, MDBTextArea} from "mdb-react-ui-kit";
import {useUpdateDiagnosticReport} from "../../../domain/usecase/report/UpdateDiagnosticReportUseCase";
import {toast} from "react-toastify";
import {UpdateReportRequest} from "../../../domain/payload/request/UpdateReportRequest";
import {jsonBeautifier} from "../../../util/JsonBeautifier";
import {getButtonClass} from "../tables/FieldClasses";
import {useUpdatePathologicReport} from "../../../domain/usecase/report/UpdatePathologicReportUseCase";

/**
 * @property {ReportType} reportType - The type of the report.
 * @property {function} onConfirm - Callback function when the user confirms.
 * @property {function} onCancel - Callback function when the user cancels.
 */

function UpdateReportModal({open, onCancel, report}) {
    const [titleInput, setTitleInput] = useState(report.title);
    const [detailsInput, setDetailsInput] = useState(report.details);

    const [titleChangeIsDisabled, setTitleChangeIsDisabled] = useState(true)
    const [detailsChangeIsDisabled, setDetailsChangeIsDisabled] = useState(true)

    const modalTitle =
        (report.reportType === ReportType.PATHOLOGICAL) ? "Update Pathologic Report" : "Update Diagnostic Report"

    const {state, updateReport} =
        (report.reportType  === ReportType.PATHOLOGICAL) ? useUpdatePathologicReport() : useUpdateDiagnosticReport()
    const handleTitleInputChange = (e) => {
        const input = e.target.value;
        setTitleInput(input);
    };

    const handleDetailsInputChange = (e) => {
        const input = e.target.value;
        setDetailsInput(input);
    };

    const toggleTitleChange = () => {
        setTitleChangeIsDisabled(!titleChangeIsDisabled)

        if(!titleChangeIsDisabled)
            setTitleInput(report.title) //Set current value
    }

    const toggleDetailsChange = () => {
        setDetailsChangeIsDisabled(!detailsChangeIsDisabled)

        if(!detailsChangeIsDisabled)
            setDetailsInput(report.details) //Set current value
    }

    const textAreaMaxLength = 500
    const textAreaStyle = {
        maxHeight:'150px',
        minHeight:'38px',
        resize:'none',
    };

    const handleUpdate = () => {
        updateReport(buildPayload())
    }

    const buildPayload = () : UpdateReportRequest => {
        return new UpdateReportRequest(report.reportId, titleInput, detailsInput)
    }

    useEffect(() => {
        if(state.successMessage.length > 0){
            toast.success(
                jsonBeautifier.getPreOfJson(state.successMessage),
                {theme:'colored', position:'top-left', hideProgressBar:true})
            state.successMessage = ''
            setTimeout(()=>{window.location.reload()}, 2000)
        }
    }, [state.successMessage]);

    useEffect(() => {
        if(state.errorMessage.length > 0){
            toast.error(jsonBeautifier.getPreOfJson(state.errorMessage), {theme:'colored', position:'top-left'})
            state.errorMessage = ''
        }
    }, [state.errorMessage]);

    return (
        <CustomModal open={open} onClose={onCancel}>
            <div className={"d-flex row gap-2 p-3 justify-content-center my-2 mx-5"}>
                {
                    state.isLoading ?
                        <div style={{width: "3rem", height: "3rem"}} className="spinner-border text-primary"
                             role="status">
                            <span className="visually-hidden">Updating...</span>
                        </div>
                        :

                        <>
                            <div className={"d-flex justify-content-center"}>
                                {
                                    (report.reportType  === ReportType.PATHOLOGICAL) ?
                                        <img src="https://cdn-icons-png.flaticon.com/512/8204/8204579.png"
                                             className={"w-responsive w-25"}
                                             alt={"create_report"}/>
                                        :
                                        <img src="https://cdn-icons-png.flaticon.com/512/7870/7870848.png"
                                             className={"w-responsive w-25"}
                                             alt={"create_report"}/>
                                }

                            </div>
                            <div className={"d-flex justify-content-center"}>
                               <span className={"text-xx-large text-black-50"}>
                                        {modalTitle}
                               </span>
                            </div>
                            <div className={"d-flex row w-75 mb-4 gap-2"}>
                                <div className={"d-flex gap-1"}>
                                    <MDBInput
                                        type="text"
                                        className="form-control"
                                        label={"Report Title"}
                                        value={titleInput}
                                        maxLength={50}
                                        onChange={handleTitleInputChange}
                                        disabled={titleChangeIsDisabled}
                                    />
                                    <button className={"btn p-1 col-1 border"} onClick={toggleTitleChange}>
                                        <i className={`fa fa-solid outline ${getButtonClass(titleChangeIsDisabled)}`}></i>
                                    </button>
                                </div>
                                <div className={"d-flex gap-1"}>
                                    <div className={"w-100"}>
                                        <MDBTextArea
                                            style={textAreaStyle}
                                            label="Report Content"
                                            rows={5}
                                            maxLength={textAreaMaxLength}
                                            value={detailsInput}
                                            onChange={handleDetailsInputChange}
                                            disabled={detailsChangeIsDisabled}
                                        />
                                        <div className={"d-flex justify-content-end "}>
                                            <span>{detailsInput.length}/{textAreaMaxLength}</span>
                                        </div>
                                    </div>
                                    <button className={"btn p-1 col-1 h-25 border"} onClick={toggleDetailsChange}>
                                        <i className={`fa fa-solid outline ${getButtonClass(detailsChangeIsDisabled)}`}></i>
                                    </button>
                                </div>


                                <div className={"d-flex justify-content-end gap-2 mt-5"}>
                                    <button type="button"
                                            className={`btn btn-dark btn-sm btn-outline-warning`}
                                            disabled={(detailsChangeIsDisabled && titleChangeIsDisabled)}
                                            onClick={handleUpdate}>

                                        <i className="fa fa-solid outline fa-pen"> Update Report </i>
                                    </button>
                                    <button type="button"
                                            className="btn btn-dark btn-outline-danger btn-sm"
                                            onClick={onCancel}>

                                        <i className="fa fa-solid fa-window-close"> Cancel</i>
                                    </button>
                                </div>
                            </div>
                        </>
                }

            </div>
        </CustomModal>
    );
}

export default UpdateReportModal;