import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='register-container'>
            <div>
                <h2>Create New Account</h2>
                <form>
                    <input type="email" name="" id="" placeholder='Your email' />
                    <br />
                    <input type="password" name="" placeholder='password' id="" />
                    <br />
                    <input type="password" name="" placeholder='re-enter password' id="" />
                    <br />
                    <input type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                <div>-----OR-----</div>
                <button className="btn-purchase">GOOGLE SIGN IN</button>
            </div>
        </div>
    );
};

export default Register;