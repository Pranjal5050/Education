import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Context create
const AuthContext = createContext();

// Backend URL
const API_URL = "http://localhost:5000";

// Auth Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check logged-in user
  const getCurrentUser = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/auth/me`,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Page load hote hi user check hoga
  useEffect(() => {
    getCurrentUser();
  }, []);

  // Logout function
  const logout = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setUser(null);
        localStorage.removeItem("token");

      }
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        logout,
        getCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};