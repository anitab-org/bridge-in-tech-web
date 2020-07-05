import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { AuthConsumer } from "./AuthContext";

const ProtectedRoute = ({ children, ...rest }) => (
    
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
    
    export default withRouter(ProtectedRoute);