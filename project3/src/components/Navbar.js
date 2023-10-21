import React, { useState } from 'react'
import  './componentCss/Navbar.css'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import { PopupMenu } from "react-simple-widgets";
const Navbar = () => {
    let [isDropdownOpen, setDropdown] = useState(false)
    const toggleOpen = () => {
        setDropdown(!isDropdownOpen)
    }
    let menuClass = `dropdown-menu${isDropdownOpen ? " show" : ""}`;
    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/">Dukaan</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/address">Add Address</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ">
                            <li className=" nav-item" >
                                <Link className="nav-link " to="/ViewCart" >View Cart</Link>
                            </li>
                            <div className="text-end">
                                <PopupMenu>
                                    <button className="btn btn-primary" >
                                        <small>A</small>
                                    </button>

                                    <div className="card text-start my-5">
                                        <div className="card-body px-4 py-4">
                                            <p
                                                className="mb-0"
                                                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
                                            >
                                                Your Name
                                            </p>
                                            <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

                                            <div
                                                className="list-group list-group-flush"
                                                style={{ margin: "0 -24px 0" }}
                                            >
                                                <button className="list-group-item list-group-item-action px-4">
                                                 <Link   className="nav-link" to='/profile'>Your Profile</Link>
                                                </button>
                                                <button className="list-group-item list-group-item-action px-4">
                                                    <Link  className="nav-link" to='/changePassword'>Change Password</Link>
                                                </button>
                                            </div>
                                            <hr style={{ margin: "0 -24px 24px" }} />
                                            <div className="d-grid">
                                                <button className="btn btn-secondary">
                                                   <Link className="nav-link" to='/login'> <small>Logout</small></Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </PopupMenu>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar