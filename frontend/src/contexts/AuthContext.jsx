import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [login, setLogin] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken, login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
