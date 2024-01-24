import {useState} from "react";
import {UserDto} from "../../dto/UserDto";
import userDao from "../../../data/api/dao/UserDao";

export const useGetAllUsers = () => {
    const [state, setState] = useState({
        users : [] as UserDto[],
        successMessage:'',
        error: {},
        errorMessage:'',
        isLoading: false,
    });

    const getAllUsers = async () => {
        setState({ ...state, isLoading: true });

        await userDao.getAllUsers()
            .then((res) => {
                console.log(res)
                setState({
                    users: res.data.data,
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
                        users: [] as UserDto[],
                        successMessage: '',
                        error: err,
                        errorMessage: err.message,
                        isLoading: false
                    })
                }
                else if(err.response.status == 403){
                    setState({
                        users: [] as UserDto[],
                        successMessage: '',
                        error: err,
                        errorMessage: 'Authentication required',
                        isLoading: false
                    });
                }
                else{
                    setState({
                        users: [] as UserDto[],
                        successMessage: '',
                        error: err,
                        errorMessage: err.response.data.message,
                        isLoading: false
                    });
                }
            })
    };

    return { state, getAllUsers };
};