import React from 'react';
import { Link } from 'react-router-dom';
import useAtuh from '../Hooks/useAuth';

const Login = () => {
    const { signInGoogle } = useAtuh();
    return (
        <div>
            <h2>Please log in</h2>
            <button onClick={signInGoogle}>Google Sign In</button>
            <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;