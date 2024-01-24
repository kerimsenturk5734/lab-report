import React from 'react'
import '../css/Table.css'
import ReportTableLabTechnician from "./tables/ReportTableLabTechnician";
import {UserType} from "./Constants";
import ReportTablePatient from "./tables/ReportTablePatient";
import ReportTableDoctor from "./tables/ReportTableDoctor";

export default function Table({userType = UserType.DEFAULT}) {
    return (
        <div className="card shadow-2-strong bg-gray">
            <div className="card-body rounded-5">
                <div className="table-responsive ">
                    <TableFactory userType={userType}/>
                </div>
            </div>
        </div>
    )
}

function TableFactory({userType = UserType.DEFAULT}){
    switch (userType) {
        case UserType.DOCTOR : return <ReportTableDoctor/>
        case UserType.PATIENT : return <ReportTablePatient/>
        case UserType.LAB_TECHNICIAN : return <ReportTableLabTechnician/>
        default : return <>Wrong Selection -> ${userType}</>

    }
}
