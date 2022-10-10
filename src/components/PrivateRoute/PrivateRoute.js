import React from 'react';
import {useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.initialize';


const PrivateRoute = ({children}) => {
    const [user] = useAuthState(auth)
    const location = useLocation();
    if(!user) {
        return <Navigate to="/login" state={ {from: location}} replace />;
    }
    return children;
    
}  
    export default PrivateRoute;

