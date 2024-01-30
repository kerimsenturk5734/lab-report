import {useState} from "react";
import userDao from "../../../data/api/dao/UserDao";

//HTTP 200
export const useIsTokenValid = () => {
    const [state, setState] = useState({
        isValid : false,
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const isTokenValid = async (token : string) => {
        setState({ ...state, isLoading: true });

        await userDao.isTokenValid(token)
            .then((res) => {
                console.log(res)
                setState({
                    isValid: res.data,
                    successMessage: "Token successfully queried",
                    error: {},
                    errorMessage: '',
                    isLoading: false
                });
            })
            .catch((err) => {
                console.log(err)

                if(err.code == "ERR_NETWORK"){
                    setState({
                        isValid : false,
                        successMessage: '',
                        error: err,
                        errorMessage: "Network Error",
                        isLoading: false
                    })
                }
                else{
                    setState({
                        isValid : false,
                        successMessage: '',
                        error: err,
                        errorMessage: "Corrupted Token",
                        isLoading: false
                    })
                }
            })
    };

    return { state, isTokenValid };
};