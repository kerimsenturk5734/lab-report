import React, {useEffect} from 'react';
import CustomModal from "./CustomModal";
import {useGetReportBlobById} from "../../../domain/usecase/report/GetReportBlobByIdUseCase";

function PdfViewModal({open, onCLose, reportId}) {
    //Fetch report from db by id
    const {state, getReportBlobById} = useGetReportBlobById()

    useEffect(() => {
        getReportBlobById(reportId)
    }, []);

    return (
        // TODO: Showing in new tab might be more readable
        <CustomModal open={open} onClose={onCLose}>
            <iframe src={state.fileUrl} title="pdf" width="100%" height="700px"></iframe>
        </CustomModal>
    );
}

export default PdfViewModal;