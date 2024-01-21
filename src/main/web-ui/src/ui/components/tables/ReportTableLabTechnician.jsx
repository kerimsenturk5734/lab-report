import React, {useEffect, useState} from 'react';
import DiseaseViewModel from '../../../viewmodel/DiseaseViewModel';
import TableHead from './TableHead';
import TooledSearchBar, {DropDown, getDropDownActions} from '../TooledSearchBar';
import {DataTypes, HEADS} from './TableConstants';
import {DiseaseState} from "../../../domain/model/Disease";
import {getBgClassByStatus, getTextClassByStatus} from "./FieldClasses";
import PdfView from "../PdfView";
import CustomModal from "../CustomModal";
import CreateReportModal from "../CreateReportModal";
import {ReportType} from "../../../domain/model/Report";

export default function ReportTablePatient() {
    const vm = new DiseaseViewModel();
    const realData = vm.getDummyLabTechnicianDiseases().data;
    const dataType = DataTypes.LAB_TECHNICIAN;

    const [data, setData] = useState(realData);
    const [searchBy, setSearchBy] = useState(dataType.SEARCH_BY.DOCTOR);
    const [orderBy, setOrderBy] = useState(dataType.ORDER_BY.ID_ASC);

    useEffect(() => {
        handleOrderBy();
    }, [orderBy]);

    const searchByActions = getDropDownActions({
        actionData: dataType.SEARCH_BY,
        onSelect: setSearchBy,
    });

    const orderByActions = getDropDownActions({
        actionData: dataType.ORDER_BY,
        onSelect: setOrderBy,
    });

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
        switch (searchBy){
            case dataType.SEARCH_BY.ID : return item.id
            case dataType.SEARCH_BY.DOCTOR : return `${item.doctor.name} ${item.doctor.surname}`
            case dataType.SEARCH_BY.LAB_TECHNICIAN : return item.labTechnician
                ? `${item.labTechnician.name} ${item.labTechnician.surname}`
                : 'Working on...';
        }
    };

    const handleOrderBy = () => {
        const sort = dataType.ORDER_BY;
        let sortedData;

        switch (orderBy) {
            case sort.ID_ASC:
                sortedData = realData.slice().sort((a, b) => a.id - b.id);
                break;
            case sort.ID_DESC:
                sortedData = realData.slice().sort((a, b) => b.id - a.id);
                break;
            case sort.DATE_NEW_TO_OLD:
                sortedData = realData.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case sort.DATE_OLD_TO_NEW:
                sortedData = realData.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            default:
                console.log('An error occurred');
                break;
        }

        setData(sortedData);
    };





    return (
        <div className={"container-sm"}>
            <TooledSearchBar
                LeftDropDown={DropDown({title: `Search By (${searchBy})`, actions: searchByActions})}
                RightDropDown={DropDown({title: `Order By (${orderBy})`, actions: orderByActions})}
                onSearch={handleSearch}
                placeHolder={`Search ${searchBy}`}
            />
            <table className="table table-borderless mb-0">
                <thead>
                    <TableHead heads={HEADS.LAB_TECHNICIAN}/>
                </thead>
                <tbody>
                    {data.map((val, index) => (
                        <TableData key={index} data={val}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


function TableData({data}) {

    const [showPdfViewModal, setShowPdfViewModal] = useState(false);
    const [createReportModalIsOpen, setCreateReportModalIsOpen] = useState(false)
    const handleShowPdfViewModal = () => {
        setShowPdfViewModal(true);
    };
    const handleClosePdfViewModal = () => {
        setShowPdfViewModal(false);
    };

    const showCreateReportModal = () => {
        setCreateReportModalIsOpen(true);
    };
    const closeCreateReportModal = () => {
        setCreateReportModalIsOpen(false);
    };

    return (
        <tr>
            <td className="text-center">{data.id}</td>
            <td className="text-center font-monospace">27 Feb 2024 13:50</td>
            <td className="text-center">{`${data.doctor.name} ${data.doctor.surname}`}</td>
            <td className="text-center font-monospace fst-italic">{data.labRequestType}</td>
            <td className={`text-center ${getTextClassByStatus(data.diseaseState)}`}>
                {data.labTechnician ? `${data.labTechnician.name} ${data.labTechnician.surname}` : 'Working on...'}
            </td>
            <td className={`text-center font-monospace fst-italic`}>
                <div className={`${getBgClassByStatus(data.diseaseState)} py-1 rounded-2`}>
                    {data.diseaseState}
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-evenly">
                    {
                        data.diseaseState !== DiseaseState.WAITING_RESULTS ?
                            <>
                                <button type="button"
                                        className={`btn btn-dark btn-outline-dark btn-sm px-2`}
                                        onClick={handleShowPdfViewModal}>

                                    <i className="fa fa-solid fa-tv"> View</i>
                                </button>
                                <button type="button" className={`btn btn-dark btn-sm px-3 btn-outline-primary`}>

                                    <i className="fa fa-solid outline fa-download"></i>
                                </button>
                                <CustomModal open={showPdfViewModal} onClose={handleClosePdfViewModal}>
                                    <PdfView/>
                                    {/* Use below version when fetching data from api*/}
                                    {/* <PdfView reportId={data.pathologicReport.reportId}/> */}
                                </CustomModal>
                            </>
                            :
                            <>
                                <button type="button"
                                        className={`btn btn-dark btn-sm px-3 btn-outline-success`}
                                        onClick={showCreateReportModal}>

                                    <i className="fa fa-solid outline fa-file"> </i> Create Report
                                </button>
                                <CustomModal open={createReportModalIsOpen} onClose={closeCreateReportModal}>
                                    <CreateReportModal reportType={ReportType.PATHOLOGICAL}
                                                       onCancel={closeCreateReportModal}/>
                                </CustomModal>
                            </>
                    }
                </div>
            </td>
        </tr>
    );
}