import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.initialize';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Orders Review</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user && <span style={{color: 'white', marginLeft: '10px'}}>  Hi, {user.displayName}</span>}
                {
                    user ?
                    <Link to="/" onClick={handleSignOut}>Sign out</Link>
                    :
                    <Link to="/login">Login</Link>}
                
            </div>
        </nav>
    );
};

export default Header;