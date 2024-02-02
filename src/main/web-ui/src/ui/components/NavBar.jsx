import React from 'react'
import {UserType} from "./Constants";
import {MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBNavbarItem, MDBNavbarLink,} from "mdb-react-ui-kit";
import NavItemsDoctor from "./nav_items/NavItemsDoctor";
import NavItemLabTechnician from "./nav_items/NavItemLabTechnician";
import NavItemPatient from "./nav_items/NavItemPatient";
import {ContentType} from "./Content";
import {LocalStorageManager} from "../../util/localStorageManager"

export default function NavBar({userType = UserType.DEFAULT, handleContent = (val) => {}}) {
    let user = LocalStorageManager.loadUser()
    const UserProfile = () => {
        return (
            <ul className="navbar-nav flex-row gap-2">
                <MDBNavbarItem className="me-3 me-lg-1 d-sm-flex align-items-sm-center">
                    {userBannerIcon(userType)}
                </MDBNavbarItem>
                <MDBNavbarItem className="me-3 me-lg-1 d-sm-flex align-items-sm-center">
                    <strong className="d-none d-sm-block ms-1">{`${user.name} ${user.surname}`}</strong>
                </MDBNavbarItem>

                <MDBNavbarItem className="dropdown">
                    <MDBDropdown>
                        <MDBDropdownToggle className="nav-link bg-transparent shadow-0">
                            <i className="fas fa-chevron-circle-down"></i>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className={"p-2"} end>
                            <MDBNavbarLink className={"dropdown-item text-info rounded-3 "}
                                           onClick={() => handleContent(ContentType.PROFILE)}>
                                <i className="fas fa-user"></i> Profile
                            </MDBNavbarLink>
                            <MDBNavbarLink className={"dropdown-item text-danger rounded-3"}
                                           onClick={() => handleContent(ContentType.LOG_OUT)}>
                                <i className="fas fa-chevron-right"></i> Log Out
                            </MDBNavbarLink>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavbarItem>
            </ul>
        );
    };
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
    const NavItemFactory = () => {
        switch (userType){
            case UserType.DOCTOR: return <NavItemsDoctor setContent={handleContent}/>
            case UserType.LAB_TECHNICIAN: return  <NavItemLabTechnician setContent={handleContent}/>
            case UserType.PATIENT: return <NavItemPatient setContent={handleContent}/>
            default : return <>Wrong Selection -> ${userType}</>
        }
    }

    const userBannerIcon = (userType) => {
        switch (userType) {
            case UserType.PATIENT :
                return <i className="fa fa-user"></i>
            case UserType.DOCTOR :
                return <i className="fa fa-stethoscope"></i>
            case UserType.LAB_TECHNICIAN :
                return <i className="fa fa-user-nurse"></i>
        }
    }

    return (
        <div>
        <nav className="navbar navbar-toggler rounded-3 mx-3 my-3 p-3 bg-white" >
                <div className="container-fluid justify-content-between">
                    <NavBrand />
                    <ul className="navbar-nav flex-row d-none d-md-flex">
                        {NavItemFactory()}
                    </ul>
                    <UserProfile/>
                </div>
            </nav>
        </div>
    );
}









