import React from 'react'
import NavBar from '../components/NavBar'
import Content from "../components/Content";
import {UserType} from "../components/Constants";

export default function Dashboard({userType = UserType.DEFAULT}) {
    return (
        <div className={"bg-dark-gray"}>
            <NavBar userType={userType}/>
            <Content userType={userType}/>
        </div>
    )
}
