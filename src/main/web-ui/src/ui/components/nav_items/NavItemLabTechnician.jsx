import React from 'react';

function NavItemLabTechnician() {
    return (
        <>
            <>
                <li className="nav-item me-3 me-lg-5 active" title={"Diseases"}>
                    <a className="nav-link" href="#">
                        <center>
                            <span><i className="fas fa-vial fa-2x"></i></span>
                        </center>
                        Lab Requests
                    </a>

                </li>
                <li className="nav-item me-3 me-lg-5 active" title={"Diseases"}>
                    <a className="nav-link" href="#">
                        <center>
                            <span><i className="fas fa-file-medical fa-2x"></i></span>
                        </center>
                        My Reports
                    </a>

                </li>
            </>
        </>
    );
}

export default NavItemLabTechnician;