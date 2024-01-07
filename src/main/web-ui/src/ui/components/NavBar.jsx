import React from 'react'
import {UserType} from "./Constants";
import {MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBNavbarItem, MDBNavbarLink,} from "mdb-react-ui-kit";
import NavItemsDoctor from "./nav_items/NavItemsDoctor";
import NavItemLabTechnician from "./nav_items/NavItemLabTechnician";
import NavItemPatient from "./nav_items/NavItemPatient";

export default function NavBar({userType = UserType.DEFAULT}) {
    return (
        <div>
            <nav className="navbar navbar-toggler rounded-3 ms-3 me-3 p-3 bg-white" >
                <div className="container-fluid justify-content-between">
                    <NavBrand />
                    <NavItems userType={userType}/>
                    <UserProfile />
                </div>
            </nav>
        </div>
    );
}

const NavBrand = () => {
    return (
        <div className="d-flex">
            <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/8204/8204580.png"
                    height="60"
                    alt="MDB Logo"
                    loading="lazy"
                    style={{ marginTop: "2px" }}
                />
                <h4>Lab Report</h4>
            </a>
        </div>
    );
};

function NavItems({userType = UserType.DEFAULT}){
    return (
        <>
            <ul className="navbar-nav flex-row d-none d-md-flex">
                <NavItemFactory userType={userType} />
            </ul>
        </>
    );
};

const UserProfile = () => {
    return (
        <ul className="navbar-nav flex-row">
            <MDBNavbarItem className="me-3 me-lg-1 d-sm-flex align-items-sm-center">
                <i className="fa fa-user-nurse"></i>
                <i className="fa fa-stethoscope"></i>
                <i className="fa fa-user"></i>
                <strong className="d-none d-sm-block ms-1">John</strong>
            </MDBNavbarItem>

            <MDBNavbarItem className="dropdown">
                <MDBDropdown>
                    <MDBDropdownToggle className="nav-link bg-transparent shadow-0">
                        <i className="fas fa-chevron-circle-down"></i>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className={"p-2"} end>
                        <MDBNavbarLink className={"dropdown-item text-info rounded-3 "} >
                            <i className="fas fa-user"></i> Profile
                        </MDBNavbarLink>
                        <MDBNavbarLink className={"dropdown-item text-danger rounded-3"}>
                            <i className="fas fa-chevron-right"></i> Log Out
                        </MDBNavbarLink>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavbarItem>
        </ul>
    );
};

function NavItemFactory({userType = UserType.DEFAULT}){
    switch (userType){
        case UserType.DOCTOR: return <NavItemsDoctor/>
        case UserType.LAB_TECHNICIAN: return  <NavItemLabTechnician/>
        case UserType.PATIENT: return <NavItemPatient/>
        default : return <>Wrong Selection -> ${userType}</>
    }
}




