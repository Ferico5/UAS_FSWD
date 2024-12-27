/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

// Membuat context untuk status login
const AuthContext = createContext();

// Membuat provider untuk AuthContext
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk menggunakan AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
