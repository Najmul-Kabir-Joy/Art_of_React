import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { logOut, user } = useAuth();
    return (
        <div className='header'>
            <img className='header_logo' src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
                <span style={{ color: 'white' }}>{user.displayName} </span>
                {
                    user.email ?
                        <button onClick={logOut}>LOGOUT</button>
                        :
                        <NavLink to="/login">LOGIN</NavLink>
                }
                <NavLink to="/register">REGISTER</NavLink>
            </nav>
        </div>
    );
};

export default Header;