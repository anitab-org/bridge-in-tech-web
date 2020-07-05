import React, { useContext } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { AuthConsumer, AuthContext, AuthProvider } from "./AuthContext";

const ProtectedRoute = ({ children, ...rest }) => (
     

    // return (

    //     <Route {...rest} render={({ location }) => {
    //         return isAuth ? 
    //              children
    //             : <Redirect to={{
    //                 pathname: "/login",
    //                 state: { from: location }
    //             }} />

    //     }} />
    // );

    
        <AuthConsumer>
             {({ isAuth }) => (
              
                <Route {...rest}
                    render={({ location }) => {
                        return isAuth ?
                            children 
                            :
                            <Redirect to={{
                                pathname: "/login",
                                state: { from: location }
                            }} />
                    }} />
            )}
        </AuthConsumer>
                
    )
    
    export default ProtectedRoute;