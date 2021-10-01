import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="logo of the company" />
            </div>
            <div className="navbar-container">
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
            </div>
        </div>
    );
};

export default Header;