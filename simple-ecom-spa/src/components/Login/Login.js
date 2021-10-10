import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <div>
                <h2>Login</h2>
                <form onSubmit=''>
                    <input type="email" name="" placeholder="your email please" id="" />
                    <br />
                    <input type="password" name="" placeholder='password' id="" />
                    <br />
                    <input type="submit" className='btn-purchase' value="Login" />
                    <p>New to ema-jhon? <Link to='/register'>Create account</Link> </p>
                    <div>*****other options*****</div>
                    <button className='btn-purchase'>Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;