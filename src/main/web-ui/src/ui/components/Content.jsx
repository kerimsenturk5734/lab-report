import React from 'react';
import Table from "./Table";
import {ContentType, UserType} from "./Constants";

export default function Content({userType = UserType}) {
    return (
        <div className="d-flex align-items-center mb-5 mt-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <ContentFactory contentType={ContentType.TABLE} userType={userType}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



function ContentFactory({contentType = ContentType, userType = UserType}) {
    switch (contentType) {
        case ContentType.TABLE :
            return <Table userType={userType}/>;
        case ContentType.PROFILE : return <div>Profile</div>;
        case ContentType.CREATE_REPORT : return <div>Create Report</div>;
        default: return <>Wrong Selection -> ${contentType}</>
    }
}