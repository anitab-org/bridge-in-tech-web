import React, { useState, createContext } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext(Cookies.get("user"));

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(Cookies.get("user"));

  const login = (token, user) => {
    let access_token = token["access_token"];
    let access_expiry = token["access_expiry"];
    Cookies.set("user", user);
    Cookies.set("access_token", access_token);
    Cookies.set("access_expiry", access_expiry);
    setIsAuth(true);
  };

  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("access_token");
    Cookies.remove("access_expiry");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        login: login,
        logout: logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer

export default AuthProvider;