import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const { signInGoogle } = useFirebase();
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