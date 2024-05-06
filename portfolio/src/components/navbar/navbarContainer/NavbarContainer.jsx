import React, { useRef, useEffect } from 'react';
import './NavbarContainerStyle.css';
import NavElements from '../navbarElements/NavbarElements';

function Navbar() {
    const navbarRef = useRef();

    useEffect(() => {
        const navbar = navbarRef.current;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = navbar.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            navbar.style.setProperty('--x', `${x}%`); //
            navbar.style.setProperty('--y', `${y}%`);
        };

        navbar.addEventListener('mousemove', handleMouseMove);

        return () => {
            navbar.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <header ref={navbarRef} className="navbar-position navbar-container">
            <NavElements />
        </header>
    );
}

export default Navbar;
