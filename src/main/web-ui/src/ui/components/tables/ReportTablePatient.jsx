import React, {useEffect, useState} from 'react';
import TableHead from './TableHead';
import TooledSearchBar, {DropDown, getDropDownActions} from '../TooledSearchBar';
import {DataTypes, HEADS} from './TableConstants';
import {getBgClassByStatus} from "./FieldClasses";
import {useGetDiseasesByPatientId} from "../../../domain/usecase/disease/GetDiseasesByPatientIdUseCase";
import {toast} from "react-toastify";
import {LocalStorageManager} from "../../../util/localStorageManager";
import {jsonBeautifier} from "../../../util/JsonBeautifier";
import PdfViewModal from "../modals/PdfViewModal";
import {useDownloadReport} from "../../../domain/usecase/report/DownloadReportUseCase";

export default function ReportTablePatient() {
    const {state, getDiseasesByPatientId} = useGetDiseasesByPatientId()

    const [realData, setRealData] = useState(state.data)
    const dataType = DataTypes.PATIENT;

    const [data, setData] = useState(realData);
    const [searchBy, setSearchBy] = useState(dataType.SEARCH_BY.DOCTOR);
    const [orderBy, setOrderBy] = useState(dataType.ORDER_BY.ID_ASC);

    const searchByActions = getDropDownActions({
        actionData: dataType.SEARCH_BY,
        onSelect: setSearchBy,
    });

    const orderByActions = getDropDownActions({
        actionData: dataType.ORDER_BY,
        onSelect: setOrderBy,
    });

    useEffect(() => {
        getDiseasesByPatientId(LocalStorageManager.loadUser().userId)
    }, []);

    useEffect(() => {
        if(state.successMessage.length > 0)
            toast.info(state.successMessage, {theme:'colored', position:'bottom-left', autoClose:1000})

    }, [state.successMessage]);

    useEffect(() => {
        if(state.errorMessage.length > 0)
            toast.error(state.errorMessage, {theme:'colored', position:'top-left'})

    }, [state.errorMessage]);

    useEffect(() => {
        setRealData(state.data)
        setData(state.data)
    }, [state.data]);

    useEffect(() => {
        handleOrderBy();
    }, [orderBy]);

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
        return searchBy === dataType.SEARCH_BY.ID ? item.id : `${item.doctor.name} ${item.doctor.surname}`;
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

            case sort.DATE_OLD_TO_NEW:
                sortedData = realData.slice().sort((a, b) =>
                    new Date(a.creationDate) - new Date(b.creationDate));
                break;

            case sort.DATE_NEW_TO_OLD:
                sortedData = realData.slice().sort((a, b) =>
                    new Date(b.creationDate) - new Date(a.creationDate));
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
                LeftDropDown={DropDown({ title: `Search By (${searchBy})`, actions: searchByActions })}
                RightDropDown={DropDown({ title: `Order By (${orderBy})`, actions: orderByActions })}
                onSearch={handleSearch}
                placeHolder={`Search ${searchBy}`}
            />

            <table className="table table-borderless mb-0">
                <thead>
                    <TableHead heads={HEADS.PATIENT} />
                </thead>
                <tbody>
                {data.map((val, index) => (
                    <TableData key={index} data={val} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

function TableData({ data }) {
    const {downloadReport} = useDownloadReport()

    const [pdfViewModalIsOpen, setPdfViewModalIsOpen] = useState(false);
    const isPathologicActionDisabled = (data.pathologicReport === null)
    const isDiagnosticActionDisabled = (data.diagnosticReport === null)

    const showPdfViewModal = () => {
        setPdfViewModalIsOpen(true);
    };
    const closePdfViewModal = () => {
        setPdfViewModalIsOpen(false);
    };

    const handleDownloadDiagnosticReport = () => {
        downloadReport(data.diagnosticReport.reportId)
    }

    const handleDownloadPathologicReport = () => {
        downloadReport(data.pathologicReport.reportId)
    }

    return (
        <tr>
            <td className="text-center">{data.id}</td>
            <td className="text-center font-monospace">{jsonBeautifier.beautifyDate(data.creationDate)}</td>
            <td className="text-center" title={`${data.doctor.name} ${data.doctor.surname}`}>
                {`${data.doctor.name} ${data.doctor.surname}`}
            </td>
            <td className="text-center font-monospace fst-italic">{data.labRequestType}</td>
            <td className={`text-center font-monospace fst-italic`}>
                <div className={`${getBgClassByStatus(data.diseaseState)} py-1 rounded-2`}>
                    {data.diseaseState}
                </div>
            </td>
            <td>
                {
                    isPathologicActionDisabled ?
                        <></> :
                        <div className="d-flex justify-content-evenly">
                            <button type="button"
                                    className="btn btn-dark btn-outline-dark btn-sm px-3"
                                    onClick={showPdfViewModal}>

                                <i className="fa fa-solid fa-tv"> View</i>
                            </button>
                            <button type="button" className="btn btn-dark btn-sm px-2 btn-outline-primary"
                                    onClick={handleDownloadPathologicReport}>

                                <i className="fa fa-solid outline fa-download"></i>
                            </button>
                            <PdfViewModal reportId={data.pathologicReport?.reportId}
                                          open={pdfViewModalIsOpen}
                                          onCLose={closePdfViewModal}/>
                        </div>
                }
            </td>
            <td>
                {
                    isDiagnosticActionDisabled ?
                        <></> :
                        <div className="d-flex justify-content-evenly">
                            <button type="button"
                                    className="btn btn-dark btn-outline-dark btn-sm px-3"
                                    onClick={showPdfViewModal}>

                                <i className="fa fa-solid fa-tv"> View</i>
                            </button>
                            <button type="button" className="btn btn-dark btn-sm px-2 btn-outline-primary"
                                    onClick={handleDownloadDiagnosticReport}>

                                <i className="fa fa-solid outline fa-download"></i>
                            </button>
                            <PdfViewModal reportId={data.diagnosticReport?.reportId}
                                          open={pdfViewModalIsOpen}
                                          onCLose={closePdfViewModal}/>
                        </div>
                }
            </td>
        </tr>
    );
}
