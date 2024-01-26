import {useState} from "react";
import userDao from "../../../data/api/dao/UserDao";
import {UserDto} from "../../dto/UserDto";

//HTTP 403, 404, 200, 400
export const useGetUserById = () => {
    const [state, setState] = useState({
        data : {} as UserDto,
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const getUserById = async (id : string) => {
        setState({ ...state, isLoading: true });

        await userDao.getUserById(id)
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
                        data: {} as UserDto,
                        successMessage: '',
                        error: err,
                        errorMessage: err.message,
                        isLoading: false
                    })
                }
                else if(err.response.status == 401){
                    setState({
                        data: {} as UserDto,
                        successMessage: '',
                        error: err,
                        errorMessage: 'Authentication Required',
                        isLoading: false
                    });
                }
                else if(err.response.status == 403){
                    setState({
                        data: {} as UserDto,
                        successMessage: '',
                        error: err,
                        errorMessage: 'Access Denied',
                        isLoading: false
                    });
                }
                else{
                    setState({
                        data: {} as UserDto,
                        successMessage: '',
                        error: err,
                        errorMessage: err.response.data.message,
                        isLoading: false
                    });
                }
            })
    };

    return { state, getUserById };
};