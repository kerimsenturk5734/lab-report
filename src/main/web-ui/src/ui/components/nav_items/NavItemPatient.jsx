import React from 'react';
import {ContentType} from "../Constants";

function NavItemPatient({setContent = (val) => {}}) {
    return (
        <>
            <li className="nav-item me-3 me-lg-5 active" title={"Diseases"} onClick={() => setContent(ContentType.TABLE)}>
                <a className="nav-link" href="#">
                    <center>
                        <span><i className="fas fa-book-medical fa-2x"></i></span>
                    </center>
                    My Diseases And Reports
                </a>
            </li>
        </>
    );
}

export default NavItemPatient;