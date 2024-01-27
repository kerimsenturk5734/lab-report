import {useState} from "react";
import diseaseDao from "../../../data/api/dao/DiseaseDao";
import {DiseaseDto} from "../../dto/DiseaseDto";

//HTTP 401, 403, 200
export const useGetDiseasesByPatientId = () => {
    const [state, setState] = useState({
        data : [] as DiseaseDto[],
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const getDiseasesByPatientId = async (patientId : string) => {
        setState({ ...state, isLoading: true });

        await diseaseDao.getDiseaseByPatientId(patientId)
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
                        data: [] as DiseaseDto[],
                        successMessage: '',
                        error: err,
                        errorMessage: err.message,
                        isLoading: false
                    })
                }
                else if(err.response.status == 401){
                    setState({
                        data: [] as DiseaseDto[],
                        successMessage: '',
                        error: err,
                        errorMessage: 'Authentication Required',
                        isLoading: false
                    });
                }
                else if(err.response.status == 403){
                    setState({
                        data: [] as DiseaseDto[],
                        successMessage: '',
                        error: err,
                        errorMessage: 'Access Denied',
                        isLoading: false
                    });
                }
                else if(err.response.status == 400){
                    setState({
                        data: [] as DiseaseDto[],
                        successMessage: '',
                        error: err,
                        errorMessage: JSON.stringify(err.response.data, null, 4),
                        isLoading: false
                    });
                }
                else{
                    setState({
                        data: [] as DiseaseDto[],
                        successMessage: '',
                        error: err,
                        errorMessage: err.response.data.message,
                        isLoading: false
                    });
                }
            })
    };

    return { state, getDiseasesByPatientId };
};