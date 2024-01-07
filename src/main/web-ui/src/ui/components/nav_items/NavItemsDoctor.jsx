import React from 'react';

function NavItemsDoctor() {
    return (
        <>
            <li className="nav-item me-3 me-lg-5 active" title={"Diseases"}>
                <a className="nav-link" href="#">
                    <center>
                        <span><i className="fas fa-viruses fa-2x"></i></span>
                    </center>
                    Diseases
                </a>

            </li>

            <li className="nav-item me-3 me-lg-1">
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