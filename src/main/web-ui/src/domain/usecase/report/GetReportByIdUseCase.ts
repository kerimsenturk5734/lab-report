import {useState} from "react";
import reportDao from "../../../data/api/dao/ReportDao";

//HTTP 401, 403, 404, 200, 400
export const useGetReportById = () => {
    const [state, setState] = useState({
        data : {} ,
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const getReportById = async (reportId : string) => {
        setState({ ...state, isLoading: true });

        await reportDao.getReportById(reportId)
            .then((res) => {
                setState({
                    data: res.data.data,
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
                        ...state,
                        error: err,
                        errorMessage: err.message,
                        isLoading: false
                    })
                }
                else if(err.response.status == 401){
                    setState({
                        ...state,
                        error: err,
                        errorMessage: 'Authentication Required',
                        isLoading: false
                    });
                }
                else if(err.response.status == 403){
                    setState({
                        ...state,
                        error: err,
                        errorMessage: 'Access Denied',
                        isLoading: false
                    });
                }
                else if(err.response.status == 400){
                    setState({
                        ...state,
                        error: err,
                        errorMessage: JSON.stringify(err.response.data, null, 4),
                        isLoading: false
                    });
                }
                else{
                    setState({
                        ...state,
                        error: err,
                        errorMessage: err.response.data.message,
                        isLoading: false
                    });
                }
            })
    };

    return { state, getReportById };
};