import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SessionUser } from "./Routes";
import _ from "underscore";

export default function ProtectedRoute({ children, ...rest }) {
    const user = useContext(SessionUser);
    return (
        <Route {...rest} render={({ location }) => {
            return !_.isEmpty(user)
                ? children
                : <Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }} />
        }} />
    )
}