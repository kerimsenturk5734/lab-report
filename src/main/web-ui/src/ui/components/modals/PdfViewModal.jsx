import React, {useEffect} from 'react';
import CustomModal from "./CustomModal";
import {useGetReportBlobById} from "../../../domain/usecase/report/GetReportBlobByIdUseCase";

function PdfViewModal({open, onCLose, reportId}) {
    //Fetch report from db by id
    const {state, getReportBlobById} = useGetReportBlobById()

    useEffect(() => {
        getReportBlobById("65458165400_fd72373c-389d-40a4-a644-62509f6063c2")
    }, []);

    return (
        // TODO: Showing in new tab might be more readable
        <CustomModal open={open} onClose={onCLose}>
            <iframe src={state.fileUrl} title="pdf" width="100%" height="700px"></iframe>
        </CustomModal>
    );
}

export default PdfViewModal;