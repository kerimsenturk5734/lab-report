import React from 'react'

export default function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div class="container-fluid justify-content-between">
                    <div class="d-flex">
                        <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="20"
                                alt="MDB Logo"
                                loading="lazy"
                                style={{marginTop: "2px"}}
                            />
                        </a>

                       
                    </div>

                    <ul class="navbar-nav flex-row d-none d-md-flex">
                        <li class="nav-item me-3 me-lg-1 active">
                            <a class="nav-link" href="#">
                                <span><i class="fas fa-home fa-lg"></i></span>
                                <span class="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                        </li>

                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link" href="#">
                                <span><i class="fas fa-flag fa-lg"></i></span>
                            </a>
                        </li>

                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link" href="#">
                                <span><i class="fas fa-video fa-lg"></i></span>
                            </a>
                        </li>

                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link" href="#">
                                <span><i class="fas fa-shopping-bag fa-lg"></i></span>
                            </a>
                        </li>

                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link" href="#">
                                <span><i class="fas fa-users fa-lg"></i></span>
                                <span class="badge rounded-pill badge-notification bg-danger">2</span>
                            </a>
                        </li>
                    </ul>

                    <ul class="navbar-nav flex-row">
                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                    class="rounded-circle"
                                    height="22"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                                <strong class="d-none d-sm-block ms-1">John</strong>
                            </a>
                        </li>
                       
                        <li class="nav-item dropdown me-3 me-lg-1">
                            <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a class="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown me-3 me-lg-1">
                            <a
                                data-mdb-dropdown-init
                                class="nav-link dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                aria-expanded="false"
                            >
                                <i class="fas fa-chevron-circle-down fa-lg"></i>
                            </a>
                            <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a class="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
