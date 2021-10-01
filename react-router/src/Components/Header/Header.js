import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div className='navlink-container'>
            <NavLink to="/home" activeStyle={activeStyle} className='nav-link'>Home</NavLink>
            <NavLink to="/friends" activeStyle={activeStyle} className='nav-link'>Friends</NavLink>
            <NavLink to="/about" activeStyle={activeStyle} className='nav-link'>About</NavLink>
            <NavLink to="/about/culture" activeStyle={activeStyle} className='nav-link'>Culture</NavLink>

        </div>
    );
};

export default Header;