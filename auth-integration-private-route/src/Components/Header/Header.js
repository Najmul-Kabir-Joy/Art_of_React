import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user } = useFirebase();
    return (
        <div className='header'>
            <Link to='/home'>HOME</Link>
            <Link to='/login'>LOGIN</Link>
            <Link to='/register'>REGISTER</Link>
            {
                user?.email &&
                <button>LOGOUT</button>
            }
        </div>
    );
};

export default Header;