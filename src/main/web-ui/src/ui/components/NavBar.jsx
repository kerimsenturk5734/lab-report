import React from 'react'
import {NavItemFactory} from "./nav_items/NavItemFactory";
import {UserType} from "./Constants";
import {MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBNavbarItem, MDBNavbarLink,} from "mdb-react-ui-kit";

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-toggler sticky-top bg-white">
                <div className="container-fluid justify-content-between">
                    <NavBrand />
                    <NavItems />
                    <UserProfile />
                </div>
            </nav>
        </>
    );
}

const NavBrand = () => {
    return (
        <div className="d-flex">
            <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="20"
                    alt="MDB Logo"
                    loading="lazy"
                    style={{ marginTop: "2px" }}
                />
            </a>
        </div>
    );
};

const NavItems = () => {
    return (
        <>
            <ul className="navbar-nav flex-row d-none d-md-flex">
                <NavItemFactory userType={UserType.LAB_TECHNICIAN} />
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




