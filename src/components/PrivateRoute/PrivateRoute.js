import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
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


// const PrivateRoute = ({children, ...rest}) => {
//     const {user} = useAuth();
//     return (
//         <Route
//         {...rest}
//         render = {({location}) => user.email? children : <Navigate
//         to={{
//             pathname: "/login",
//             state: { from: location }
//           }}
        
//         ></Navigate>}
        
//         >
            
//         </Route>
//     );
// };
