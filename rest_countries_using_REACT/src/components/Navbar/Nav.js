import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='links'>
            <a href="/home">Home</a>
            <a href="/away">Away</a>
            <a href="/sprint">Sprint</a>
        </div>
    );
};

export default Nav;