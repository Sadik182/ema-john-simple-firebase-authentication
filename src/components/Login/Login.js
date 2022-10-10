import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useState } from 'react';
import auth from '../../Firebase/firebase.initialize';


const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    // const history = useHistory();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect_uri = location.state?.from || '/shop'

    const [signInWithEmailAndPassword,
        user,
        loading,
        error,] = useSignInWithEmailAndPassword(auth);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            navigate(redirect_uri)
        })
    }
    const handleEmailLogin = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
    }
    if(user) {
        navigate('/shop');
    }
    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleEmailLogin}>
                   <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Enter Your Email' required/>
                   </div>
                   <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder='Enter Your Password' required/>
                   </div>
                   <input className='submit-button' type="submit" value="Login" />
                </form>
                <p>New to Ema-John? <Link to="/register" className='form-link'>Create an Account</Link></p>
                <div>-----------OR-------------</div>
                <button onClick={handleGoogleLogin} size="lg" className="btn-regular">Google Sign In</button>
             </div>
        </div>
    );
};

export default Login;