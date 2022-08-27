import React from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.initialize';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword, user,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPass(event.target.value);
    }

    const handleRegister = (event) => {
        event.preventDefault()
        if(password !== confirmpass) {
            setError('Two Password is not matched')
            return
        }
        createUserWithEmailAndPassword(email, password);
    }

    if(user) {
        navigate('/');
    }


    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Register</h2>
                <form onSubmit={handleRegister}>
                   <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' placeholder='Enter Your Email' required/>
                   </div>
                   <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name='password' placeholder='Enter Your Password' required />
                   </div>
                   <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name='confirmPassword' placeholder='Retype Your Password' required />
                   </div>
                   <p style={{color: 'red'}}><span>{error}</span></p>
                   <input className='submit-button' type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to="/login" className='form-link'>Login</Link></p>
                <div>-----------OR-------------</div>
                <button  className="btn-regular">Google Sign In</button>
             </div>
        </div>
    );
};

export default Register;