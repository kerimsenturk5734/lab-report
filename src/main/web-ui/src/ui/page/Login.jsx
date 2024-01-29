import React, {useEffect, useState} from 'react';
import './../css/App.css'
import {MDBBtn, MDBContainer, MDBInput} from 'mdb-react-ui-kit';
import {toast, ToastContainer} from "react-toastify";
import {PatientCreateRequest} from "../../domain/payload/request/PatientCreateRequest";
import {useRegisterPatient} from "../../domain/usecase/user/RegisterPatientUseCase";
import {getPreOfJson} from "../../util/JsonBeautifier";
import {useLoginUser} from "../../domain/usecase/user/LoginUserUseCase";
import {UserLoginRequest} from "../../domain/payload/request/UserLoginRequest";
import {useNavigate} from "react-router-dom";
import {PagePath} from "../../App";


function Login() {

    const [content, setContent] = useState("login")

    const CurrentCard = () => {
        switch (content){
            case 'login' : return <LoginCard/>
            case 'register' : return <RegisterCard/>
            default : return <div>Wrong Selection -> ${content}</div>
        }
    }

    return (
        <MDBContainer className="gradient-form">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 box-shadow bg-gray mt-5">
                    <div className="text-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/8204/8204580.png"
                             style={{width: '150px'}} alt="logo"/>
                        <h4 className="mt-1 mb-5 pb-1">Lab Report</h4>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-2">
                        <MDBBtn className='mx-2' color='secondary'
                                onClick={() => { setContent("login") }}>
                            Login
                        </MDBBtn>
                        <MDBBtn className='mx-2' color='secondary'
                                onClick={() => { setContent("register")}}>
                            Register
                        </MDBBtn>
                    </div>

                    <CurrentCard/>
                </div>
                <ToastContainer/>
            </div>

        </MDBContainer>
    );
}

const LoginCard = () => {
    const {state, loginUser} = useLoginUser()

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const nav = useNavigate()

    useEffect(() => {
        if(state.successMessage.length > 0){
            toast.success(state.successMessage, {style:{width:'-webkit-fit-content'}, position:"top-left"})
            state.successMessage = ''
            saveCredentials()
            setTimeout(()=>{nav(PagePath.DASHBOARD)}, 2000)
        }
    }, [state.successMessage]);

    useEffect(() => {
        if(state.errorMessage.length > 0){
            toast(getPreOfJson(state.errorMessage),
                {type:'error', theme: 'colored', position:"top-left", style:{width:'500px'}})
            state.errorMessage = ''
        }
    }, [state.errorMessage]);


    const handleUserIdChange = (e) => {
        const input = e.target.value;
        setUserId(input);
    }

    const handlePasswordChange = (e) => {
        const input = e.target.value;
        setPassword(input);
    }

    const login = () => {
        loginUser(new UserLoginRequest(userId, password))
    }

    const saveCredentials = () => {
        let credentials = state.credential

        for (const key in credentials) {
            if (credentials.hasOwnProperty(key)) {
                localStorage.setItem(key, JSON.stringify(credentials[key], null, 2))
            }
        }

        console.log(localStorage.getItem("token"))
        console.log(localStorage.getItem("user"))
    }

    return (
        <>
            <div className="row align-items-center justify-content-center ">
                <MDBInput wrapperClass='mb-4 w-75' label='User ID' type='text' maxLength={11}
                          value={userId} onChange={handleUserIdChange}/>

                <MDBInput wrapperClass='mb-4 w-75' label='Password' type='password'
                          value={password} onChange={handlePasswordChange}/>
            </div>
            <div className="text-center pt-1 mb-2 pb-1 mt-3">
                <MDBBtn className="mb-4 w-75 gradient-custom-2" onClick={login}>Login</MDBBtn>
            </div>
        </>
    )
}
const RegisterCard = () => {
    const {state, registerPatient} = useRegisterPatient()

    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [controlPassword, setControlPassword] = useState('')

    useEffect(() => {
        if(state.successMessage.length > 0){
            toast.success(state.successMessage, {style:{width:'-webkit-fit-content'}, position:"top-left"})
            state.successMessage = ''
            setTimeout(()=>{window.location.reload()}, 2000)
        }
    }, [state.successMessage]);

    useEffect(() => {
        if(state.errorMessage.length > 0){
            toast(getPreOfJson(state.errorMessage),
                {type:'error', theme: 'colored', position:"top-left", style:{width:'500px'}})
            state.errorMessage = ''
        }
    }, [state.errorMessage]);

    const handleUserIdChange = (e) => {
        const input = e.target.value;
        setUserId(input);
    }
    const handleNameChange = (e) => {
        const input = e.target.value;
        setName(input);
    }
    const handleSurnameChange = (e) => {
        const input = e.target.value;
        setSurname(input);
    }
    const handlePasswordChange = (e) => {
        const input = e.target.value;
        setPassword(input);
    }
    const handleControlPasswordChange = (e) => {
        const input = e.target.value;
        setControlPassword(input);
    }

    const register = () => {
        if (!arePasswordsEqual())
            toast.warning("Passwords are not equal", {position:"top-left", theme:'colored'})
        else {
            //Build payload
            let payload = buildPayload()

            //Call api
            registerPatient(payload)
        }
    }

    const buildPayload = () : PatientCreateRequest => {
        return new PatientCreateRequest(userId, name, surname, password)
    }

    const arePasswordsEqual = () : boolean => {
        return (password === controlPassword)
    }

    return (
        <>
            <div className="row align-items-center justify-content-center">
                <MDBInput wrapperClass='mb-4 w-75' label='User ID' type='text' maxLength={11}
                          value={userId} onChange={handleUserIdChange}/>

                <MDBInput wrapperClass='mb-4 w-75' label='Name' type='text'
                          value={name} onChange={handleNameChange}/>

                <MDBInput wrapperClass='mb-4 w-75' label='Surname' type='text'
                          value={surname} onChange={handleSurnameChange}/>

                <MDBInput wrapperClass='mb-4 w-75' label='Password' type='password'
                          value={password} onChange={handlePasswordChange}/>

                <MDBInput wrapperClass='mb-4 w-75' label='Repassword' type='password'
                          value={controlPassword} onChange={handleControlPasswordChange}/>
            </div>

            <div className="text-center pt-1 mb-2 pb-1 mt-3">
                <MDBBtn className="mb-4 w-75 gradient-custom-2" onClick={register}>Register</MDBBtn>
            </div>
        </>
    )
}

export default Login;
