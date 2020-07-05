import React, { useContext } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children, ...rest }) => {
    const {isAuth} = useContext(AuthContext);
    console.log(isAuth);
    
    return <Route {...rest}
                    render={({ location }) => {
                        return isAuth ?
                            children 
                            :
                            <Redirect to={{
                                pathname: "/login",
                                state: { from: location }
                            }} />
                    }} />
        
    }
    
    
    export default withRouter(ProtectedRoute);