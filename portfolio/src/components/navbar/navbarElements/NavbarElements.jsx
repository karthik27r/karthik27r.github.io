import React from "react";
import { NavLink } from 'react-router-dom';
import { navItems } from './NavbarItems';

function NavElements() {
    return(
    <nav>
      {navItems.map((element) => (
        <NavLink
          key={element.path}
          to={element.path}
          activeClassName="active"
        >
          {element.label}
        </NavLink>
      ))}
    </nav>
    );
}

export default NavElements;