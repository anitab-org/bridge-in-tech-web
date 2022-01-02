import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute({ children, ...rest }) {
    const { isAuth } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) => {
                return isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
}
