import {useState} from "react";
import {CreateDiseaseRequest} from "../../payload/request/CreateDiseaseRequest";
import diseaseDao from "../../../data/api/dao/DiseaseDao";

//HTTP 403, 400, 409, 201
export const useCreateDisease = () => {
    const [state, setState] = useState({
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const createDisease = async (createDiseaseRequest : CreateDiseaseRequest) => {
        setState({ ...state, isLoading: true });

        await diseaseDao.createDisease(createDiseaseRequest)
            .then((res) => {
                console.log(res)
                setState({
                    successMessage: `Disease created successfully`,
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

    return { state, createDisease };
};