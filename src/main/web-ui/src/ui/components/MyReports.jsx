import React, {useState} from 'react';
import {MDBCard} from "mdb-react-ui-kit";
import PdfView from "./PdfView";
import CustomModal from "./CustomModal";

function MyReports(props) {
    return (
        <div>
            <div className={"d-flex row justify-content-center"}>
                <div className={"row text-black-50"}>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                    <ReportCard/>
                </div>
            </div>
        </div>
    );
}

function ReportCard(){
    const [showPdfViewModal, setShowPdfViewModal] = useState(false);
    const handleShowPdfViewModal = () => {
        setShowPdfViewModal(true);
    };
    const handleClosePdfViewModal = () => {
        setShowPdfViewModal(false);
    };

    return (
        <MDBCard className={"col-2 m-4 p-2 gap-2"}>
            <div className={"d-flex justify-content-center"}>
                <i className="fa fa-solid fa-file fa-8x"></i>
            </div>
            <div className={"d-flex justify-content-center"}>
                <h6 className={"text-black-50"}>
                    <span>2023 Sep 16 2:13 PM UTC+3 </span>
                    <i className="fa fa-solid fa-calendar "></i>
                </h6>
            </div>
            <div className={"d-flex justify-content-around"}>
                <button type="button"
                        className="btn btn-dark btn-outline-black btn-sm px-3"
                        onClick={handleShowPdfViewModal}>

                    <i className="fa fa-solid fa-tv"> View</i>
                </button>
                <button type="button" className="btn btn-dark btn-outline-primary btn-sm px-3">
                    <i className="fa fa-solid fa-download"> Download</i>
                </button>
            </div>
            <CustomModal open = {showPdfViewModal} onClose = {handleClosePdfViewModal}>
                <PdfView/>
                {/* Use below version when fetching data from api*/}
                {/* <PdfView reportId={data.pathologicReport.reportId}/> */}
            </CustomModal>
        </MDBCard>
    )
}

export default MyReports;