import React from 'react';

function NavItemPatient() {
    return (
        <>
            <li className="nav-item me-3 me-lg-5 active" title={"Diseases"}>
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