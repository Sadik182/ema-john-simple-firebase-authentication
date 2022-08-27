import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    return (
        <Route
        {...rest}
        render = {({location}) => user.email? children : <Navigate
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        
        ></Navigate>}
        
        >
            
        </Route>
    );
};

export default PrivateRoute;