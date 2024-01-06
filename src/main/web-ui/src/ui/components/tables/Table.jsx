import React from 'react'
import '../../css/Table.css'
import ReportTableLabTechnician from "./ReportTableLabTechnician";

export default function Table() {
    return (
        <div className="row justify-content-center">
            <div className="col-11">
                <div className="card shadow-2-strong" style={{backgroundColor: "#f5f7fa"}}>
                    <div className="card-body">
                        <div className="table-responsive">
                            <ReportTableLabTechnician/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
