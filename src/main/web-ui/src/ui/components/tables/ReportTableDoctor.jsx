import React from 'react'
import DiseaseViewModel from "../../../viewmodel/DiseaseViewModel";
import TableHead from "./TableHead";
import TooledSearchBar, {DropDown} from "../TooledSearchBar";

export default function ReportTableDoctor() {
    const vm = new DiseaseViewModel()
    const data = vm.getDummyDoctorDiseases().data
    const heads = [
        "ID", "DATE", "PATIENT ID", "REQUEST", "STATUS",
        "LAB TECHNICIAN", "PATHOLOGIC", "DIAGNOSTIC", "ACTIONS"]

    const searchByActions = ["ID", "PATIENT"]
    const orderByActions = ["ID Increasing", "PATIENT ID Increasing"]

    return (
        <div>
            <TooledSearchBar
                LeftDropDown = {DropDown({title: "Search By", actions : searchByActions})}
                RightDropDown ={DropDown({title: "Order By", actions : orderByActions})} />

            <table className="table table-borderless mb-0">
                <thead>
                    <TableHead heads={heads}/>
                </thead>
                <tbody>
                {
                    data.map((val) => {
                        return <TableData data={val}/>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

function TableData({data}) {
    return (
        <tr>
            <td className='text-center'>{data.id}</td>
            <td className='text-center font-monospace'>27 Feb 2024 13:50</td>
            <td className='text-center'>{data.patient.userId}</td>
            <td className='text-center font-monospace fst-italic'>{data.labRequestType}</td>
            <td className='text-center font-monospace fst-italic'>{data.diseaseState}</td>
            <td className='text-center'>{data.labTechnician.name} {data.labTechnician.surname}</td>
            <td>
                <div className='d-flex justify-content-lg-between'>
                    <button type="button" className="btn btn-outline-dark btn-sm px-3">
                        <i className="fa fa-solid fa-tv"> View</i>
                    </button>
                    <button type="button" className="btn btn-dark btn-sm px-2 btn-outline-primary">
                        <i className="fa fa-solid outline fa-download"></i>
                    </button>
                </div>
            </td>
            <td>
                <div className='d-flex justify-content-lg-between'>
                    <button type="button" className="btn btn-outline-dark btn-sm px-3">
                        <i className="fa fa-solid fa-tv"> View</i>
                    </button>
                    <button type="button" className="btn btn-outline-primary btn-sm px-2">
                        <i className="fa fa-solid fa-download"></i>
                    </button>
                </div>
            </td>
            <td>
                <div className='d-flex justify-content-lg-between'>
                    <button type="button" className="btn btn-warning btn-sm px-3">
                        <i className="fa fa-solid fa-arrow-circle-right"> Update</i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm px-3">
                        <i className="fa fa-solid fa-trash"> Delete</i>
                    </button>
                </div>
            </td>
        </tr>
    )
}