import {useState} from "react";
import reportDao from "../../../data/api/dao/ReportDao";

//HTTP 401, 403, 404, 200, 400
export const useGetReportBlobById = () => {
    const [state, setState] = useState({
        fileUrl : '' ,
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const getReportBlobById = async (reportId : string) => {
        setState({ ...state, isLoading: true });

        await reportDao.getReportBlobById(reportId)
            .then((res) => {
                setState({
                    fileUrl: URL.createObjectURL(res.data),
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
                        fileUrl: '',
                        successMessage: '',
                        error: err,
                        errorMessage: err.message,
                        isLoading: false
                    })
                }
                else if(err.response.status == 401){
                    setState({
                        fileUrl: '',
                        successMessage: '',
                        error: err,
                        errorMessage: 'Authentication Required',
                        isLoading: false
                    });
                }
                else if(err.response.status == 403){
                    setState({
                        fileUrl: '',
                        successMessage: '',
                        error: err,
                        errorMessage: 'Access Denied',
                        isLoading: false
                    });
                }
                else if(err.response.status == 400){
                    setState({
                        fileUrl: '',
                        successMessage: '',
                        error: err,
                        errorMessage: JSON.stringify(err.response.data, null, 4),
                        isLoading: false
                    });
                }
                else{
                    setState({
                        fileUrl: '',
                        successMessage: '',
                        error: err,
                        errorMessage: err.response.data.message,
                        isLoading: false
                    });
                }
            })
    };

    return { state, getReportBlobById };
};