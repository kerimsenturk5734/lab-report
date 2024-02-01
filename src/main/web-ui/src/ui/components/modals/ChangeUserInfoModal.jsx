import React, {useEffect, useState} from 'react';
import CustomModal from "./CustomModal";
import {MDBInput} from "mdb-react-ui-kit";
import {UpdateUserRequest} from "../../../domain/payload/request/UpdateUserRequest";
import {getButtonClass} from "../tables/FieldClasses";
import {toast} from "react-toastify";
import {jsonBeautifier} from "../../../util/JsonBeautifier";
import {useUpdateUserCase} from "../../../domain/usecase/user/UpdateUserUseCase";
import {LocalStorageManager} from "../../../util/localStorageManager";

function ChangeUserInfoModal({open, onCancel}) {
    const {state, updateUser} = useUpdateUserCase()

    //Initial values will be current user value
    const user = LocalStorageManager.loadUser()
    const [name, setName] = useState(user?.name)
    const [surname, setSurname] = useState(user?.surname)
    const [password, setPassword] = useState("-----")
    const [nameChangeIsDisabled, setNameChangeIsDisabled] = useState(true)
    const [surnameChangeIsDisabled, setSurnameChangeIsDisabled] = useState(true)
    const [passwordChangeIsDisabled, setPasswordChangeIsDisabled] = useState(true)
    const [errorMessage, setErrorMessage]  = useState([])
    const handleNameInputChange = (e) => {
        const input = e.target.value;
        setName(input);
    };

    const handleSurnameInputChange = (e) => {
        const input = e.target.value;
        setSurname(input);
    };

    const handlePasswordInputChange = (e) => {
        const input = e.target.value;
        setPassword(input);
    };

    const toggleNameChange = () => {
        setNameChangeIsDisabled(!nameChangeIsDisabled)

        if(!nameChangeIsDisabled)
            setName(user?.name) //Set current value
    }

    const toggleSurnameChange = () => {
        setSurnameChangeIsDisabled(!surnameChangeIsDisabled)

        if(!surnameChangeIsDisabled)
            setSurname(user?.surname) //Set current value
    }

    const togglePasswordChange = () => {
        setPasswordChangeIsDisabled(!passwordChangeIsDisabled)
        setErrorMessage([])

        if(passwordChangeIsDisabled)
            setPassword("") //Set current value
        else
            setPassword("----------") //Have you really thought that I am going to set real password here :D
    }

    const isPasswordValid = () : boolean => {
        if(!passwordChangeIsDisabled){
            const isLengthValid = password.length >= 8;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);

            let errorMessages = [];
            if (!isLengthValid) {
                errorMessages.push("Password must be at least 8 characters.");
            }
            if (!hasUpperCase) {
                errorMessages.push("Password must contain at least one uppercase letter.");
            }
            if (!hasLowerCase) {
                errorMessages.push("Password must contain at least one lowercase letter.");
            }
            if (!hasNumber) {
                errorMessages.push("Password must contain at least one number.");
            }

            setErrorMessage(errorMessages);

            return (isLengthValid && hasUpperCase && hasLowerCase && hasNumber)
        }

        return true
    }

    const buildPayload = () => {
        let payload = new UpdateUserRequest()

        payload.name = (nameChangeIsDisabled) ? null : name
        payload.surname = (surnameChangeIsDisabled) ? null : surname
        payload.password = (passwordChangeIsDisabled) ? null : password

        return payload
    }
    const changeUserInfo = () => {
        //request to api
        if(isPasswordValid())
            updateUser(buildPayload())
    }

    useEffect(() => {
        if(state.successMessage.length > 0){
            let toastOptions =
                {position:'top-left', hideProgressBar: true, theme:'colored'}
            toast.success(jsonBeautifier.getPreOfJson(state.successMessage), toastOptions)
            state.successMessage = ''
            onCancel()
            setTimeout(()=>{window.location.reload()}, 2000)
        }
    }, [state.successMessage]);

    useEffect(() => {
        if(state.errorMessage.length > 0){
            let toastOptions =
                {position:'top-left', hideProgressBar: true, theme:'colored', style:{width:'400px'}}
            toast.error(jsonBeautifier.getPreOfJson(state.errorMessage), toastOptions)
            state.errorMessage = ''
        }
    }, [state.errorMessage]);

    useEffect(() => {
        isPasswordValid()
    }, [password]);

    return (
        <CustomModal open={open} onClose={onCancel}>
            <div className={"d-flex row gap-2 justify-content-center  mx-5"}>
                <div className={"d-flex justify-content-center"}>
                    <img src="https://cdn-icons-png.flaticon.com/512/11361/11361973.png"
                         className={"w-responsive"} style={{width:'20%'}}
                         alt={"create_report"}/>
                </div>
                <div className={"d-flex justify-content-center"}>
                   <span className={"text-xx-large text-black-50"}>
                       Change User Info
                   </span>
                </div>
                <div className={"d-flex w-75 mb-4 gap-2"}>
                    <MDBInput label='Name' type='text' value={name}
                              onChange={handleNameInputChange} disabled={nameChangeIsDisabled}/>

                    <button className={"btn p-1 col-1"} onClick={toggleNameChange}>
                        <i className={`fa fa-solid outline ${getButtonClass(nameChangeIsDisabled)}`}></i>
                    </button>
                </div>

                <div className={"d-flex w-75 mb-4 gap-2"}>
                    <MDBInput label='Surname' type='text' value={surname}
                              onChange={handleSurnameInputChange} disabled={surnameChangeIsDisabled}/>
                    <button className={"btn p-1 col-1"} onClick={toggleSurnameChange}>
                        <i className={`fa fa-solid outline ${getButtonClass(surnameChangeIsDisabled)}`}></i>
                    </button>
                </div>

                <div className={"d-flex w-75 mb-4 gap-2"}>
                    <MDBInput label='Password' type='password' value={password}
                              onChange={handlePasswordInputChange} disabled={passwordChangeIsDisabled}/>
                    <button className={"btn p-1 col-1"} onClick={togglePasswordChange}>
                        <i className={`fa fa-solid outline ${getButtonClass(passwordChangeIsDisabled)}`}></i>
                    </button>
                </div>
                <div className={"d-flex row justify-content-center w-75"}>
                    {
                        errorMessage.map((err, index) => {
                            return (
                                <label key={index} className={"text-danger"}>*{err}<br/></label>
                            )
                        })
                    }
                </div>
                <div className={"d-flex w-75 justify-content-end gap-2 my-2"}>
                    <button type="button"
                            className={`btn btn-dark btn-sm btn-outline-warning`}
                            onClick={changeUserInfo}>

                        <i className="fa fa-solid outline fa-pen"> Update User </i>
                    </button>
                    <button type="button"
                            className="btn btn-dark btn-outline-danger btn-sm"
                            onClick={onCancel}>

                        <i className="fa fa-solid fa-window-close"> Cancel</i>
                    </button>
                </div>
            </div>
        </CustomModal>
    );
}

export default ChangeUserInfoModal;