import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionUser } from "./Routes";
import _ from "underscore";

export default function ProtectedRoute({ component: Component, ...rest }) {
    const user = useContext(SessionUser);
    if (!_.isEmpty(user)) {
        return (
            <Route {...rest} render={props => {
                return <Component exact path={Component.pathname} {...rest} {...props} />
            }} />
        )
    }
    else 
        return  <Redirect to="/login" />
}