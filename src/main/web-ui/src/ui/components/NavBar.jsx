import React from 'react'

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-toggler sticky-top bg-white">
                <div className="container-fluid justify-content-between">
                    <div className="d-flex">
                        <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="20"
                                alt="MDB Logo"
                                loading="lazy"
                                style={{marginTop: "2px"}}
                            />
                        </a>
                    </div>

                    <ul className="navbar-nav flex-row d-none d-md-flex">
                        <li className="nav-item me-3 me-lg-1 active">
                            <a className="nav-link" href="#">
                                <span><i className="fas fa-home fa-lg"></i></span>
                                <span className="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                        </li>

                        <li className="nav-item me-3 me-lg-1">
                            <a className="nav-link" href="#">
                                <span><i className="fas fa-flag fa-lg"></i></span>
                            </a>
                        </li>

                        <li className="nav-item me-3 me-lg-1">
                            <a className="nav-link" href="#">
                                <span><i className="fas fa-video fa-lg"></i></span>
                            </a>
                        </li>

                        <li className="nav-item me-3 me-lg-1">
                            <a className="nav-link" href="#">
                                <span><i className="fas fa-shopping-bag fa-lg"></i></span>
                            </a>
                        </li>

                        <li className="nav-item me-3 me-lg-1">
                            <a className="nav-link" href="#">
                                <span><i className="fas fa-users fa-lg"></i></span>
                                <span className="badge rounded-pill badge-notification bg-danger">2</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar-nav flex-row">
                        <li className="nav-item me-3 me-lg-1">
                            <a className="nav-link d-sm-flex align-items-sm-center" href="#">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                    className="rounded-circle"
                                    height="22"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                                <strong className="d-none d-sm-block ms-1">John</strong>
                            </a>
                        </li>
                       
                        <li className="nav-item dropdown me-3 me-lg-1">
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown me-3 me-lg-1">
                            <a
                                data-mdb-dropdown-init
                                className="nav-link dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                aria-expanded="false"
                            >
                                <i className="fas fa-chevron-circle-down fa-lg"></i>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
