/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUser(null);
  };

  const updateRoomNo = (room_no) => {
    setUser((prevUser) => {
      const updatedUser = { ...prevUser, room_no };
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  return <AuthContext.Provider value={{ isLoggedIn, user, login, logout, updateRoomNo, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
