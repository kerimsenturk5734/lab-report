import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {PagePath} from "../../App";
import {MDBCard, MDBContainer} from "mdb-react-ui-kit";

function LogOut() {
    const nav = useNavigate()

    useEffect(() => {
        logout()
    }, []);

    const logout = () => {
        //Clear the token from local storage
        localStorage.removeItem("token")

        //Navigate to log in screen as delayed
        setTimeout(()=>{nav(PagePath.LOGIN)},2000)
    }

    return (
        <MDBContainer className="mt-5 col-5" fluid={false}>
            <MDBCard className={"p-5"}>
                <div className={"d-flex row justify-content-center text-center gap-5"}>
                    <div style={{width:"5rem", height:"5rem"}} className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <span className={"text-xx-large text-black-50"}>
                        Logging out.. <br/> Redirecting to login...
                    </span>
                </div>
            </MDBCard>
        </MDBContainer>
    );
}

export default LogOut;