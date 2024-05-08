import React, { useRef, useEffect } from 'react';
import './NavbarContainerStyle.css';
import NavElements from '../navbarElements/NavbarElements';

import { getMousePosition } from '../../../scripts/mousePosition';

function Navbar() {
    const navbarRef = useRef();
    useEffect(() => {
        getMousePosition(navbarRef, 'percent');
    }, []);


    return (
        <header ref={navbarRef} className="navbar-position navbar-container">
            <NavElements />
        </header>
    );
}

export default Navbar;
