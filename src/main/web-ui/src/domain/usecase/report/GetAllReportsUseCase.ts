import {useState} from "react";
import {Report} from "../../model/Report";
import reportDao from "../../../data/api/dao/ReportDao";

//HTTP 401, 403, 200
export const useGetAllReports = () => {
    const [state, setState] = useState({
        data : [] as Report[],
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const getAllReports = async () => {
        setState({ ...state, isLoading: true });

        await reportDao.getAllReports()
            .then((res) => {
                console.log(res)
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
                        data: [] as Report[],
                        successMessage: '',
                        error: err,
                        errorMessage: err.message,
                        isLoading: false
                    })
                }
                else if(err.response.status == 401){
                    setState({
                        data: [] as Report[],
                        successMessage: '',
                        error: err,
                        errorMessage: 'Authentication Required',
                        isLoading: false
                    });
                }
                else if(err.response.status == 403){
                    setState({
                        data: [] as Report[],
                        successMessage: '',
                        error: err,
                        errorMessage: 'Access Denied',
                        isLoading: false
                    });
                }
                else{
                    setState({
                        data: [] as Report[],
                        successMessage: '',
                        error: err,
                        errorMessage: err.response.data.message,
                        isLoading: false
                    });
                }
            })
    };

    return { state, getAllReports };
};