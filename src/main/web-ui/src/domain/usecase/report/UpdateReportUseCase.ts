import {useState} from "react";
import {UpdateReportRequest} from "../../payload/request/UpdateReportRequest";
import reportDao from "../../../data/api/dao/ReportDao";

//HTTP 403, 401, 400, 404, 200
export const useUpdateReport = () => {
    const [state, setState] = useState({
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const updateReport = async (updateReportRequest : UpdateReportRequest) => {
        setState({ ...state, isLoading: true });

        await reportDao.updateReport(updateReportRequest)
            .then((res) => {
                console.log(res)
                setState({
                    successMessage: res.data.message,
                    error: {},
                    errorMessage: '',
                    isLoading: false
                });
            })
            .catch((err) => {
                console.log(err)

                if(err.code == "ERR_NETWORK"){
                    setState({
                        successMessage: '',
                        error: err,
                        errorMessage: err.message,
                        isLoading: false
                    })
                }
                else if(err.response.status == 401){
                    setState({
                        successMessage: '',
                        error: err,
                        errorMessage: "Authentication required!!!",
                        isLoading: false
                    });
                }
                else if(err.response.status == 403){
                    setState({
                        successMessage: '',
                        error: err,
                        errorMessage: 'Access Denied',
                        isLoading: false
                    });
                }
                else if(err.response.status == 400){
                    setState({
                        successMessage: '',
                        error: err,
                        errorMessage: JSON.stringify(err.response.data, null, 4),
                        isLoading: false
                    });
                }
                else{
                    setState({
                        successMessage: '',
                        error: err,
                        errorMessage: err.response.data.message,
                        isLoading: false
                    });
                }
            })
    };

    return { state, updateReport };
};