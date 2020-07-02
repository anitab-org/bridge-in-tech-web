import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionUser } from "./Routes";

export default function ProtectedRoute({ component: Component, ...rest }) {
    const user = useContext(SessionUser);
    if (user !== undefined) {
        return (
            <Route {...rest} render={props => {
                return <Component exact path={Component.pathname} {...rest} {...props} />
            }} />
        )
    }
    else 
        return  <Redirect to="/login" />
}