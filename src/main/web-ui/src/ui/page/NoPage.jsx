import React from 'react';
import {MDBCard, MDBContainer} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {PagePath} from "../../App";

function NoPage() {
    return (
        <MDBContainer className="mt-5" fluid={false}>
            <MDBCard className={"p-5"}>
                <div className={"d-flex row justify-content-center text-center gap-5"}>
                    <img
                        src={"https:/cdn-icons-png.flaticon.com/512/3855/3855833.png"}
                        alt={"404"}
                        className={"w-responsive w-25"}/>
                    <span className={"text-xx-large"}>
                        Page Not Found
                    </span>
                    <Link to={PagePath.LOGIN}>
                        <div className={"btn text-x-large"}>
                            <i className={"fa fa-solid fa-arrow-right"}></i>
                            <span>   Go to Login</span>
                        </div>
                    </Link>
                </div>
            </MDBCard>
        </MDBContainer>
    );
}

export default NoPage;