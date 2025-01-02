/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';

// Membuat context untuk status login
const AuthContext = createContext();

// Membuat provider untuk AuthContext
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Inisialisasi status login dari localStorage
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedUserData = localStorage.getItem('userData');

    if (storedLoginStatus && storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setIsLoggedIn(true);
        setUser(parsedUserData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        // Jika terjadi error, hapus data lokal yang rusak
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
      }
    } else {
      if (!window.location.pathname.includes('/login')) {
        window.location.replace('/login');
      }
    }
  }, []);

  // Fungsi login
  const login = (userData) => {
    try {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify(userData));
      setIsLoggedIn(true);
      setUser(userData);
    } catch (error) {
      console.error('Error saving login data:', error);
    }
  };

  // Fungsi logout
  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUser(null);
  };

  return <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>{children}</AuthContext.Provider>;
};

// Hook untuk menggunakan AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
