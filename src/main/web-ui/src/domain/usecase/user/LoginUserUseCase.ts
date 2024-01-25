import {useState} from "react";
import userDao from "../../../data/api/dao/UserDao";
import {UserLoginRequest} from "../../payload/request/UserLoginRequest";
import {UserLoginResponse} from "../../payload/response/UserLoginResponse";

//HTTP 403, 400,
export const useLoginUser = () => {
    const [state, setState] = useState({
        credential : {} as UserLoginResponse,
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const loginUser = async (userLoginRequest : UserLoginRequest) => {
        setState({ ...state, isLoading: true });

        await userDao.loginUser(userLoginRequest)
            .then((res) => {
                console.log(res)
                setState({
                    credential: res.data.data,
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
                        credential: {} as UserLoginResponse,
                        successMessage: '',
                        error: err,
                        errorMessage: err.message,
                        isLoading: false
                    })
                }
                else if(err.response.status == 403){
                    setState({
                        credential: {} as UserLoginResponse,
                        successMessage: '',
                        error: err,
                        errorMessage: "Authentication required!!!",
                        isLoading: false
                    });
                }
                else if(err.response.status == 400){
                    setState({
                        credential: {} as UserLoginResponse,
                        successMessage: '',
                        error: err,
                        errorMessage: JSON.stringify(err.response.data, null, 4),
                        isLoading: false
                    });
                }
                else{
                    setState({
                        credential: {} as UserLoginResponse,
                        successMessage: '',
                        error: err,
                        errorMessage: err.response.data.message,
                        isLoading: false
                    });
                }
            })
    };

    return { state, loginUser };
};