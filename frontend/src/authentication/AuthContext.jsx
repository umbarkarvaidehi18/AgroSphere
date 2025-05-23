import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "../config/axiosConfig";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await axios.get("/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.data.user) {
            setCurrentUser(response.data.user);
          }
        }
      } catch (err) {
        console.error("Authentication error:", err);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    checkLoggedIn();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setError(null);
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setCurrentUser(response.data.user);
        return true;
      }

      return false;
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login");
      return false;
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      setError(null);
      const response = await axios.post("/auth/register", userData);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setCurrentUser(response.data.user);
        return true;
      }

      return false;
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during registration"
      );
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

  // Password reset request
  const requestPasswordReset = async (email) => {
    try {
      setError(null);
      await axios.post("/auth/forgot-password", { email });
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      return false;
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout,
    requestPasswordReset,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
