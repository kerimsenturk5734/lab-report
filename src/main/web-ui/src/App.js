import React, {useEffect, useState} from 'react';
import './ui/css/App.css'
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./ui/page/Dashboard";
import {UserType} from "./ui/components/Constants";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./ui/page/Login";
import NoPage from "./ui/page/NoPage";
import {useIsTokenValid} from "./domain/usecase/user/IsTokenValidUseCase";

export default function App() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token"))?.key)
    const [userType, setUserType] = useState(UserType.DEFAULT)
    const {state, isTokenValid} = useIsTokenValid()

    useEffect(() => {
        console.log(token)
        if(![null, undefined, ""].includes(token))
            isTokenValid(token)
    }, []);

    useEffect(() => {
        console.log(state.isValid)
        if(state.isValid)
            setUserType(JSON.parse(localStorage.getItem("user")).role)

        setIsUserLoggedIn(state.isValid)
    },[state.isValid])

    return (
        <BrowserRouter>
            <Routes>
                <Route path = {PagePath.LOGIN}
                       element = { isUserLoggedIn ? <Navigate to = {PagePath.DASHBOARD}/> : <Login/> }/>

                <Route path = {PagePath.DASHBOARD}
                       element = { isUserLoggedIn ? <Dashboard userType = {userType}/> : <Navigate to = {PagePath.LOGIN}/> }/>

                <Route path = {PagePath.NO_PAGE} element = { <NoPage/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export const PagePath = {
  LOGIN : "/",
  DASHBOARD : "dashboard",
  NO_PAGE : "*"
}