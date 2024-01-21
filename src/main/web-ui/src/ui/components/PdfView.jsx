import React from 'react';

function PdfView({reportId}) {
    //Fetch report from db by id
    return (
        <object data="https://africau.edu/images/default/sample.pdf" type="application/pdf" width="80%"
                height="710px">
            <p>Alternative text - include a link <a href="https://africau.edu/images/default/sample.pdf">to the
                PDF!</a></p>
        </object>
    );
}

export default PdfView;