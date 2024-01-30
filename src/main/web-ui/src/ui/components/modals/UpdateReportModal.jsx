import React, {useState} from 'react';
import {ReportType} from "../../../domain/model/Report";
import CustomModal from "./CustomModal";
import {MDBInput, MDBTextArea} from "mdb-react-ui-kit";

/**
 * @property {ReportType} reportType - The type of the report.
 * @property {function} onConfirm - Callback function when the user confirms.
 * @property {function} onCancel - Callback function when the user cancels.
 */

function UpdateReportModal({open, reportType, onCancel}) {
    const [titleInput, setTitleInput] = useState('');
    const [contentInput, setContentInput] = useState('');
    const modalTitle =
        (reportType === ReportType.PATHOLOGICAL) ? "Update Pathologic Report" : "Update Diagnostic Report"
    const handleTitleInputChange = (e) => {
        const input = e.target.value;
        setTitleInput(input);
    };

    const handleContentInputChange = (e) => {
        const input = e.target.value;
        setContentInput(input);
    };

    const textAreaMaxLength = 500
    const textAreaStyle = {
        maxHeight:'150px',
        minHeight:'38px',
        resize:'none',
    };

    const updateReport = () => {

    }

    return (
        <CustomModal open={open} onClose={onCancel}>
            <div className={"d-flex row gap-2 p-3 justify-content-center my-2 mx-5"}>
                <div className={"d-flex justify-content-center"}>
                    {
                        (reportType === ReportType.PATHOLOGICAL) ?
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
                        value={contentInput}
                        onChange={handleContentInputChange}
                    />
                    <div className={"d-flex justify-content-end"}>
                        <span>{contentInput.length}/{textAreaMaxLength}</span>
                    </div>

                    <div className={"d-flex justify-content-end gap-2 mt-5"}>
                        <button type="button"
                                className={`btn btn-dark btn-sm btn-outline-warning`}
                                onClick={updateReport}>

                            <i className="fa fa-solid outline fa-pen"> Update Report </i>
                        </button>
                        <button type="button"
                                className="btn btn-dark btn-outline-danger btn-sm"
                                onClick={onCancel}>

                            <i className="fa fa-solid fa-window-close"> Cancel</i>
                        </button>
                    </div>
                </div>
            </div>
        </CustomModal>
    );
}

export default UpdateReportModal;