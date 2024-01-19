import React from 'react';

import {ContentType} from "../Content";

function NavItemsDoctor({setContent = (val) => {}}) {
    return (
        <>
            <li className="nav-item me-3 me-lg-5 active" title={"Diseases"} onClick={() => setContent(ContentType.TABLE)}>
                <a className="nav-link" href="#">
                    <center>
                        <span><i className="fas fa-viruses fa-2x"></i></span>
                    </center>
                    Diseases
                </a>

            </li>

            <li className="nav-item me-3 me-lg-1" onClick={() => setContent(ContentType.CREATE_DISEASE)}>
                <a className="nav-link" href="#">
                    <center>
                        <span><i className="far fa-plus-square fa-2x "></i></span>
                    </center>
                    Create Disease
                </a>
            </li>
        </>
    );
}

export default NavItemsDoctor;