import React from 'react'
import NavBar from '../components/NavBar'
import Table from '../components/tables/Table'

export default function Dashboard() {
    return (
        <div>
            <NavBar/>
            <div className="d-flex align-items-center mt-5">
                <div className="container-fluid">
                    <Table/>
                </div>
            </div>
        </div>
    )
}
