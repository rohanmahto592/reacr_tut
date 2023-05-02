import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const navStyles=({isActive})=>{
        return {
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive?'none':'underline'
        }
    }
  return (
    <nav>
        <NavLink style={navStyles} to="/">
            Home
        </NavLink>
        <NavLink style={navStyles} to="/about">
            About page
        </NavLink> <NavLink style={navStyles} to="/products">
            product page
        </NavLink>

    </nav>
  );
}

export default Navbar;
