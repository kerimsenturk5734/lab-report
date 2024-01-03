import React from 'react'
import '../../css/Table.css'
import ReportTableDoctor from './ReportTableDoctor'

export default function Table() {
    return (
        <div>
            <div className="d-flex align-items-center h-100 mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="card shadow-2-strong" style={{ backgroundColor: "#f5f7fa" }}>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <ReportTableDoctor/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
