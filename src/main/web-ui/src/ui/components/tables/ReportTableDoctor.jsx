import React, {useEffect, useState} from 'react';
import TableHead from './TableHead';
import TooledSearchBar, {DropDown, getDropDownActions} from '../TooledSearchBar';
import {DataTypes, HEADS} from './TableConstants';
import {DiseaseState} from "../../../domain/model/Disease";
import {getBgClassByStatus, getTextClassByStatus} from "./FieldClasses";
import PdfViewModal from "../modals/PdfViewModal";
import CreateReportModal from "../modals/CreateReportModal";
import {ReportType} from "../../../domain/model/Report";
import UpdateReportModal from "../modals/UpdateReportModal";
import AreYouSureModal from "../modals/AreYouSureModal";
import {useGetDiseasesByDoctorId} from "../../../domain/usecase/disease/GetDiseasesByDoctorIdUseCase";
import {LocalStorageManager} from "../../../util/localStorageManager";
import {jsonBeautifier} from "../../../util/JsonBeautifier";
import {useDownloadReport} from "../../../domain/usecase/report/DownloadReportUseCase";

export default function ReportTableDoctor() {
    const {state, getDiseasesByDoctorId} = useGetDiseasesByDoctorId()

    const dataType = DataTypes.DOCTOR;

    const [realData, setRealData] = useState(state.data)
    const [data, setData] = useState(realData);

    const [searchBy, setSearchBy] = useState(dataType.SEARCH_BY.PATIENT_ID);
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
        const user = LocalStorageManager.loadUser()
        getDiseasesByDoctorId(user.userId)
            .then(() => {/*TODO toast loading.. during isLoading is true*/})
    }, []);

    useEffect(() => {
        setRealData(state.data)
        setData(state.data)
    }, [state.data]);

    useEffect(() => {
        handleOrderBy();
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
        let field;

        if (searchBy === dataType.SEARCH_BY.ID) field = item.id;
        else if (searchBy === dataType.SEARCH_BY.LAB_TECHNICIAN) {
            field = item.labTechnician
                ? `${item.labTechnician.name} ${item.labTechnician.surname}`
                : 'Working on...';
        } else field = item.patient.userId;

        return field;
    };

    const handleOrderBy = () => {
        const sort = dataType.ORDER_BY;
        let sortedData;

        switch (orderBy) {
            case sort.ID_ASC:
                sortedData = realData
                    .slice()
                    .sort((a, b) => a.id - b.id);
                break;

            case sort.ID_DESC:
                sortedData = realData
                    .slice()
                    .sort((a, b) => b.id - a.id);
                break;

            case sort.PATIENT_ID_ASC:
                sortedData = realData
                    .slice()
                    .sort((a, b) => a.patient.userId - b.patient.userId);
                break;

            case sort.PATIENT_ID_DESC:
                sortedData = realData
                    .slice()
                    .sort((a, b) => b.patient.userId - a.patient.userId);
                break;

            case sort.DATE_OLD_TO_NEW:
                sortedData = realData
                    .slice()
                    .sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate));
                break;

            case sort.DATE_NEW_TO_OLD:
                sortedData = realData
                    .slice()
                    .sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
                break;

            default:
                console.log('An error occurred');
                break;
        }

        setData(sortedData);
    };

    return (
        <div>
            <TooledSearchBar
                LeftDropDown={DropDown({ title: `Search By (${searchBy})`, actions: searchByActions })}
                RightDropDown={DropDown({ title: `Order By (${orderBy})`, actions: orderByActions })}
                onSearch={handleSearch}
                placeHolder={`Search ${searchBy}`}
            />

            <table className="table table-borderless mb-0">
                <thead>
                <TableHead heads={HEADS.DOCTOR} />
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
    const diseaseState = data.diseaseState

    const isPathologicActionDisabled =
        [DiseaseState.DELETED, DiseaseState.WAITING_RESULTS].includes(diseaseState)

    const isDiagnosticActionDisabled =
        [DiseaseState.DELETED, DiseaseState.WAITING_RESULTS, DiseaseState.PATHOLOGIC_RESULTED].includes(diseaseState)

    const isDiagnosticCreationDisabled = (diseaseState !== DiseaseState.PATHOLOGIC_RESULTED)

    const [pathologicPdfViewModalIsOpen, setPathologicPdfViewModalIsOpen] = useState(false);
    const [diagnosticPdfViewModalIsOpen, setDiagnosticPdfViewModalIsOpen] = useState(false);
    const [createReportModalIsOpen, setCreateReportModalIsOpen] = useState(false)
    const [updateReportModalIsOpen, setUpdateReportModalIsOpen] = useState(false)
    const [deleteDiseaseModalIsOpen, setDeleteDiseaseModalIsOpen] = useState(false)

    const {state, downloadReport} = useDownloadReport()
    const showPathologicPdfViewModal = (reportId : string) => {
        setPathologicPdfViewModalIsOpen(true);
    }
    const showDiagnosticPdfViewModal = (reportId : string) => {
        setDiagnosticPdfViewModalIsOpen(true);
    };
    const closePdfViewModal = () => {
        setPathologicPdfViewModalIsOpen(false);
        setDiagnosticPdfViewModalIsOpen(false);
    };
    const showCreateReportModal = () => {
        setCreateReportModalIsOpen(true);
    };
    const closeCreateReportModal = () => {
        setCreateReportModalIsOpen(false);
    };
    const showUpdateReportModal = () => {
        setUpdateReportModalIsOpen(true);
    };
    const closeUpdateReportModal = () => {
        setUpdateReportModalIsOpen(false);
    };
    const showDeleteDiseaseModal = () => {
        setDeleteDiseaseModalIsOpen(true)
    }
    const closeDeleteDiseaseModal = () => {
        setDeleteDiseaseModalIsOpen(false)
    }
    const deleteDisease = () => {

    }

    return (
        <tr>
            <td className="text-center">{data.id}</td>
            <td className="text-center font-monospace">{jsonBeautifier.beautifyDate(data.creationDate)}</td>
            <td className="text-center">{data.patient.userId}</td>
            <td className="text-center font-monospace fst-italic">{data.labRequestType}</td>
            <td className={`text-center font-monospace fst-italic rounded-2`}>
                <div className={`${getBgClassByStatus(diseaseState)} p-1 rounded-2`}>
                    {data.diseaseState}
                </div>
            </td>
            <td className={`text-center ${getTextClassByStatus(diseaseState)}`}>
                {data.labTechnician ? `${data.labTechnician.name} ${data.labTechnician.surname}` : 'Working on...'}
            </td>
            <td>
                {
                    isPathologicActionDisabled ?
                        <></> :
                        <div className="d-flex justify-content-lg-between">
                            <button type="button"
                                    className="btn btn-dark btn-outline-dark btn-sm px-3"
                                    onClick={showPathologicPdfViewModal}>

                                <i className="fa fa-solid fa-tv"></i>
                            </button>
                            <button type="button" className="btn btn-dark btn-sm px-2 btn-outline-primary"
                                    onClick={() => {downloadReport(data.pathologicReport?.reportId)}}>
                                <i className="fa fa-solid outline fa-download"></i>
                            </button>
                            <PdfViewModal reportId={data.pathologicReport?.reportId}
                                          open={pathologicPdfViewModalIsOpen}
                                          onCLose={closePdfViewModal}/>
                        </div>
                }
            </td>
            <td>
                {
                    isDiagnosticCreationDisabled ?
                        <>
                            {
                                isDiagnosticActionDisabled ?
                                    <></> :
                                    <div className="d-flex justify-content-lg-between">
                                        <button type="button"
                                                className="btn btn-dark btn-outline-dark btn-sm px-3"
                                                onClick={showDiagnosticPdfViewModal}>

                                            <i className="fa fa-solid fa-tv"></i>
                                        </button>
                                        <button type="button" className="btn btn-dark btn-outline-primary btn-sm px-2"
                                                onClick={() => {downloadReport(data.diagnosticReport?.reportId)}}>
                                            <i className="fa fa-solid fa-download"></i>
                                        </button>
                                        <PdfViewModal reportId={data.diagnosticReport?.reportId}
                                                      open={diagnosticPdfViewModalIsOpen}
                                                      onCLose={closePdfViewModal}/>
                                    </div>
                            }
                        </>
                        :
                        <>
                            <button type="button"
                                    className={`btn btn-dark btn-sm px-2 btn-outline-success`}
                                    onClick={showCreateReportModal}>

                                <i className="fa fa-solid outline fa-file"> </i> Create Report
                            </button>
                            <CreateReportModal open={createReportModalIsOpen}
                                               reportType={ReportType.DIAGNOSTIC}
                                               onCancel={closeCreateReportModal}/>
                        </>

                }
            </td>
            <td>
                <div className="d-flex justify-content-lg-between">
                    {
                        (data.diagnosticReport != null) ?
                            <>
                                <button type="button"
                                        className="btn btn-warning btn-sm px-2"
                                        onClick={showUpdateReportModal}>

                                    <i className="fa fa-solid fa-arrow-circle-right"> </i> Update Report
                                </button>
                                <UpdateReportModal open={updateReportModalIsOpen}
                                                   reportType={ReportType.DIAGNOSTIC}
                                                   onCancel={closeUpdateReportModal}/>
                            </>
                            :
                            <button type="button" className="btn btn-warning btn-sm disabled text-black-50 px-2">
                                <i className="fa fa-solid fa-arrow-circle-right"> </i> Update Report
                            </button>
                    }
                    <button type="button" className="btn btn-danger btn-sm px-2" onClick={showDeleteDiseaseModal}>
                        <i className="fa fa-solid fa-trash"> </i>
                    </button>
                    <AreYouSureModal open={deleteDiseaseModalIsOpen}
                                     question={`Are you sure to delete disease with id: ${data.id} ?`}
                                     onConfirm={deleteDisease}
                                     onCancel={closeDeleteDiseaseModal}/>
                </div>
            </td>
        </tr>
    );
}
