import React from "react";
import './NavbarContainerStyle.css'
import NavElements from '../navbarElements/NavbarElements'

function Navbar(){
    return(
        <header className="navbar-position navbar-container">
            <NavElements />
        </header>
    );
}

export default Navbar;