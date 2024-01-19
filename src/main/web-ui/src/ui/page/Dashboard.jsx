import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import Content, {ContentType} from "../components/Content";
import {UserType} from "../components/Constants";

export default function Dashboard({userType = UserType.DEFAULT}) {
    const [content, setContent] = useState(ContentType.TABLE)
    return (
        <div className={"bg-dark-gray"}>
            <NavBar userType={userType} handleContent = {setContent}/>
            <Content userType={userType} contentType = {content}/>
        </div>
    )
}
