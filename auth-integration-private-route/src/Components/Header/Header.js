import React from 'react';
import { Link } from 'react-router-dom';
import useAtuh from '../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAtuh();
    return (
        <div className='header'>
            <Link to='/home'>HOME</Link>
            <Link to='/login'>LOGIN</Link>
            <Link to='/register'>REGISTER</Link>
            <Link to='/shipping'>SHIPPING</Link>
            <Link to='/placeorder'>PLACEORDER</Link>
            <span> {user.displayName} </span>
            {
                user?.email &&
                <button onClick={logOut}>LOGOUT</button>
            }
        </div>
    );
};

export default Header;