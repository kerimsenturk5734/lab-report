import React, {useEffect, useState} from 'react'
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
    const [orderBy, setOrderBy] = useState(dataType.ORDER_BY.ID_ASC)


    const searchByActions = getDropDownActions(
        {actionData : dataType.SEARCH_BY, onSelect:setSearchBy})
    const orderByActions = getDropDownActions(
        {actionData : dataType.ORDER_BY, onSelect:setOrderBy})

    useEffect(() => {
        handleOrderBy()

    }, [orderBy]);

    const handleSearch = (query) => {
        const filteredData = realData.filter((item) =>
            selectSearchByField(item)
                .toString()
                .toLowerCase()
                .includes(query.toLowerCase())
        );

        setData(filteredData);
    };

    const selectSearchByField = (item) => {
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

    const handleOrderBy = () => {
        const x = realData

        let sortedData = x
        const sort = dataType.ORDER_BY;

        switch (orderBy) {
            case sort.ID_ASC:
                sortedData = x.sort((a, b) => a.id - b.id)
                break;

            case sort.ID_DESC:
                sortedData = x.sort((a, b) => a.id - b.id).reverse()
                break;

            case sort.PATIENT_ID_ASC:
                sortedData = x.sort((a, b) => a.patient.userId - b.patient.userId)
                break;

            case sort.PATIENT_ID_DESC:
                sortedData = x.sort((a, b) => a.patient.userId - b.patient.userId).reverse()
                break;

            case sort.DATE_NEW_TO_OLD:
                sortedData = x.sort((a, b) => new Date(a.date) - new Date(b.date))
                break;

            case sort.DATE_OLD_TO_NEW:
                sortedData = x.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse()
                break;

            default:
                console.log("Bir hata var")
                break;
        }


        setData(sortedData);
    };


    return (
        <div>
            <TooledSearchBar
                LeftDropDown = {DropDown({title: "Search By"+`(${searchBy})`, actions : searchByActions})}
                RightDropDown = {DropDown({title: "Order By"+`(${orderBy})`, actions : orderByActions})}
                onSearch = {handleSearch}
                placeHolder={`Search ${searchBy}`}
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
            {
                (data.diseaseState === "WAITING_RESULTS") ?
                    <td className='text-center font-monospace fst-italic bg-info rounded-2'>{data.diseaseState}</td>
                    :
                    <td className='text-center font-monospace fst-italic bg-warning rounded-2'>{data.diseaseState}</td>
            }
            {
                (data.labTechnician !== null) ?
                    <td className='text-center text-warning'>
                        {data.labTechnician.name} {data.labTechnician.surname}
                    </td>
                    :
                    <td className='text-center text-info fst-italic '>Working on...</td>
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
