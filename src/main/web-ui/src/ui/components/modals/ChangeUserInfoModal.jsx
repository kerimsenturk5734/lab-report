import React, {useState} from 'react';
import CustomModal from "./CustomModal";
import {MDBInput} from "mdb-react-ui-kit";
import {UpdateUserRequest} from "../../../domain/payload/request/UpdateUserRequest";
import {getButtonClass} from "../tables/FieldClasses";

function ChangeUserInfoModal({open, onCancel}) {

    //Initial values will be current value
    const [name, setName] = useState("Kerim")
    const [surname, setSurname] = useState("Senturk")
    const [password, setPassword] = useState("-----")
    const [nameChangeIsDisabled, setNameChangeIsDisabled] = useState(true)
    const [surnameChangeIsDisabled, setSurnameChangeIsDisabled] = useState(true)
    const [passwordChangeIsDisabled, setPasswordChangeIsDisabled] = useState(true)
    const [errorIsOpen, setErrorIsOpen] = useState(false)
    const [errorMessage, setErrorMessage]  = useState("An error occurred.")
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

        if(!isPasswordValid()){
            setErrorMessage("Password length must be 8 digit minimum!!!")
            setErrorIsOpen(true)
        }else{setErrorIsOpen(false)}
    };

    const toggleNameChange = () => {
        setNameChangeIsDisabled(!nameChangeIsDisabled)

        if(!nameChangeIsDisabled)
            setName("Kerim") //Set current value
    }

    const toggleSurnameChange = () => {
        setSurnameChangeIsDisabled(!surnameChangeIsDisabled)

        if(!surnameChangeIsDisabled)
            setSurname("Senturk") //Set current value
    }

    const togglePasswordChange = () => {
        setPasswordChangeIsDisabled(!passwordChangeIsDisabled)

        if(passwordChangeIsDisabled)
            setPassword("") //Set current value
        else
            setPassword("-----")
    }

    const isPasswordValid = () => {
        if(!passwordChangeIsDisabled)
            return password.trim().length >= 8

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
        let payload = buildPayload()
        //request to api
        console.log(payload)
    }

    return (
        <CustomModal open={open} onClose={onCancel}>
            <div className={"d-flex row gap-2 p-3 justify-content-center my-2 mx-5"}>
                <div className={"d-flex justify-content-center"}>
                    <img src="https://cdn-icons-png.flaticon.com/512/11361/11361973.png"
                         className={"w-responsive w-25"}
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
                {
                    errorIsOpen ?
                        <div className={"d-flex justify-content-center w-75"}>
                            <label className={"text-danger"}>{errorMessage}</label>
                        </div>
                        : <></>
                }
                <div className={"d-flex w-75 justify-content-end gap-2 mt-5"}>
                    <button type="button"
                            className={`btn btn-dark btn-sm btn-outline-warning`}
                            onClick={changeUserInfo} disabled={!isPasswordValid()}>

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