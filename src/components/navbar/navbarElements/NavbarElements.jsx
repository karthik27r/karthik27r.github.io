import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from './NavbarItems';
import './NavbarElementsStyle.css';


function NavElements() {
  return (
    <nav className="nav-elements-container">
      {navItems.map((element) => (

          <NavLink key={element.path}
            to={element.path}
            className={({ isActive }) => {
              const baseClasses = 'nav-link-color nav-link-alignment';
              return isActive ? `${baseClasses} active` : baseClasses;
            }}
          >
            <div className="nav-item-alignment">
              {element.icon && <element.icon className="nav-icon" />}
              <p className="nav-title">{element.label}</p>
            </div>
          </NavLink>
      ))}
    </nav>
  );
}
export default NavElements;