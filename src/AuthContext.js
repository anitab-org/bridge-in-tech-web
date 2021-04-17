import React, {createContext, useEffect, useState} from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
  user: null,
  isAuth: false,
  login: () => {},
  logout: () => {},
});

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(Cookies.get('user')!=null);
  const [user, setUser] = useState(null);

  useEffect(
    () => {
      const userCookie = Cookies.get('user');
      if(userCookie){
        setIsAuth(true);
        return;
      }
      setIsAuth(false);
    },
    [user]
  );

  const login = (token, user) => {
    if(user) {
      Cookies.set("user", user);
      Cookies.set("access_token", token["access_token"]);
      Cookies.set("access_expiry", token["access_expiry"]);
      setUser(user);
    }
  };

  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("access_token");
    Cookies.remove("access_expiry");
    setUser(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user: Cookies.get("user"),
        isAuth: isAuth,
        access_token: Cookies.get("access_token"),
        access_expiry: Cookies.get("access_expiry"),
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
