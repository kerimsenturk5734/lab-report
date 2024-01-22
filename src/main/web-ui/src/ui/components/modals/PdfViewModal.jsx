import React from 'react';
import CustomModal from "./CustomModal";

function PdfViewModal({open, onCLose, reportId}) {
    //Fetch report from db by id
    return (
        <CustomModal open={open} onClose={onCLose}>
            <object data="https://africau.edu/images/default/sample.pdf" type="application/pdf" width="80%"
                    height="710px">
                <p>Alternative text - include a link <a href="https://africau.edu/images/default/sample.pdf">to the
                    PDF!</a></p>
            </object>
        </CustomModal>
    );
}

export default PdfViewModal;