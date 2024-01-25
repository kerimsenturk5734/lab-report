import {useState} from "react";
import userDao from "../../../data/api/dao/UserDao";
import {CreateUserRequest} from "../../payload/request/CreateUserRequest";

//HTTP 403, 400, 409, 201
export const useRegisterUser = () => {
    const [state, setState] = useState({
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const registerUser = async (createUserRequest : CreateUserRequest) => {
        setState({ ...state, isLoading: true });

        await userDao.register(createUserRequest)
            .then((res) => {
                console.log(res)
                setState({
                    successMessage: `User created successfully with id:${createUserRequest.userId}`,
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
                else if(err.response.status == 403){
                    setState({
                        successMessage: '',
                        error: err,
                        errorMessage: "Authentication required!!!",
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

    return { state, registerUser };
};