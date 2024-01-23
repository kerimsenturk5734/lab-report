import React from 'react';
import './ui/css/App.css'
import Dashboard from "./ui/page/Dashboard";
import {UserType} from "./ui/components/Constants";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./ui/page/Login";
import NoPage from "./ui/page/NoPage";
import diseaseDao from "./data/api/dao/DiseaseDao";

export default function App() {

  const isUserLoggedIn = true // Validate from api
  /*
    Get userType from local storage.
    Even if change the userType as manual user can not access the forbidden endpoints
  */
  const userType = UserType.DOCTOR

    diseaseDao.getDiseasesByDoctorId(1234567).then((value) => console.log(value))
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