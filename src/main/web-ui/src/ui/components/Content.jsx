import React from 'react';
import Table from "./tables/Table";
import {ContentType} from "./Constants";

function Content() {
    return (
        <div className="d-flex align-items-center mb-5 mt-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <ContentFactory contentType={ContentType.TABLE}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;

function ContentFactory({contentType = ContentType}) {
    switch (contentType) {
        case ContentType.TABLE :
            return <Table/>;
        case ContentType.PROFILE : return <div>Profile</div>;
        case ContentType.CREATE_REPORT : return <div>Create Report</div>;
        default: return <>Wrong Selection -> ${contentType}</>
    }
}