import React, { useState } from 'react'
import Css from './componentCss/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    let [isDropdownOpen, setDropdown] = useState(false)
    const handleDropDown = () => {
        setDropdown(!isDropdownOpen)
    }
    return (
        <div>
            <Profile />
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
                            <li className=" nav-item circle text " onClick={handleDropDown} >A</li>
                            {isDropdownOpen && <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar