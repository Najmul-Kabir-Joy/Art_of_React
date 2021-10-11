import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import authInit from '../firebase/firebase.init';
import { useLocation, useHistory } from 'react-router-dom';
import './Login.css';

authInit();

const Login = () => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/shop';
    const history = useHistory();
    const handleGoogleLogin = () => {
        signInGoogle()
            .then(res => {
                history.push(redirectUrl);
            })
    }
    return (
        <div className='login-container'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" placeholder="your email please" id="" />
                    <br />
                    <input type="password" name="" placeholder='password' id="" />
                    <br />
                    <input type="submit" className='btn-purchase' value="Login" />
                    <p>New to ema-jhon? <Link to='/register'>Create account</Link> </p>
                    <div>*****other options*****</div>
                </form>
                <button onClick={handleGoogleLogin} className='btn-purchase'>Google Sign In</button>

            </div>
        </div>
    );
};

export default Login;