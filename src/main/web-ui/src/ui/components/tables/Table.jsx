import React from 'react'
import '../../css/Table.css'
import ReportTableLabTechnician from "./ReportTableLabTechnician";

export default function Table() {
    return (
        <div className="card shadow-2-strong bg-gray">
            <div className="card-body rounded-5">
                <div className="table-responsive ">
                    <ReportTableLabTechnician/>
                </div>
            </div>
        </div>
    )
}
