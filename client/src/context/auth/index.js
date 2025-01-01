import React, { createContext, useContext, useState, useEffect } from "react";

// Mock TokenStore for managing tokens
const TokenStore = {
  getToken: () => localStorage.getItem("authToken"),
  setToken: (token) => localStorage.setItem("authToken", token),
  clearToken: () => localStorage.removeItem("authToken"),
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = TokenStore.getToken();
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (newToken) => {
    TokenStore.setToken(newToken);
    setToken(newToken);
  };

  const logout = () => {
    TokenStore.clearToken();
    setToken(null);
  };

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
