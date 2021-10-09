import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>HOME</Link>
            <Link to='/login'>LOGIN</Link>
            <Link to='/register'>REGISTER</Link>
        </div>
    );
};

export default Header;