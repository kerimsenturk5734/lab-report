import React, {useState} from 'react'
import DiseaseViewModel from "../../../viewmodel/DiseaseViewModel";
import TableHead from "./TableHead";
import TooledSearchBar, {DropDown, getDropDownActions} from "../TooledSearchBar";
import {DataTypes, HEADS} from "./TableConstants";

export default function ReportTableDoctor() {
    const vm = new DiseaseViewModel()
    const realData = vm.getDummyDoctorDiseases().data
    const dataType = DataTypes.DOCTOR

    const [data, setData] = useState(realData);
    const [searchBy, setSearchBy] = useState(dataType.SEARCH_BY.PATIENT_ID)
    const [orderBy, setOrderBy] = useState("")


    const searchByActions = getDropDownActions(
        {actionData : dataType.SEARCH_BY, onSelect:setSearchBy})
    const orderByActions = getDropDownActions(
        {actionData : dataType.ORDER_BY, onSelect:setOrderBy})

    const handleSearch = (query) => {
        const filteredData = realData.filter((item) =>
            selectSearchField(item)
                .toString()
                .toLowerCase()
                .includes(query.toLowerCase())
        );

        setData(filteredData);
    };

    const selectSearchField = (item) => {
        let field

        if(searchBy === dataType.SEARCH_BY.ID)
            field = item.id
        else if(searchBy === dataType.SEARCH_BY.LAB_TECHNICIAN){
            if(item.labTechnician === null)
                field = "Working on..."
            else
                field = item.labTechnician.name.concat(item.labTechnician.surname)
        }
        else
            field = item.patient.userId

        console.log(dataType.SEARCH_BY.LAB_TECHNICIAN)
        return field
    }

    return (
        <div>
            <TooledSearchBar
                LeftDropDown = {DropDown({title: "Search By"+`(${searchBy})`, actions : searchByActions})}
                RightDropDown = {DropDown({title: "Order By"+`(${orderBy})`, actions : orderByActions})}
                onSearch = {handleSearch}
            />

            <table className="table table-borderless mb-0">
                <thead>
                    <TableHead heads={HEADS.DOCTOR}/>
                </thead>
                <tbody>
                {
                    data.map((val, index) => {
                        return <TableData key = {index} data={val}/>
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
            {
                (data.labTechnician !== null) ?
                    <td className='text-center text-bg-success'>{data.labTechnician.name} {data.labTechnician.surname}</td>
                    :
                    <td className='text-center text-bg-info fst-italic'>Working on...</td>
            }
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
