import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" className='logo-brand' />
            <nav className='navigation-bar'>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>

        </div>
    );
};

export default Header;