import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchCourese = async () => {
    const response = await axios.get("http://localhost:5020/courses");
    return response.data;
  };

  const login = async (email, password) => {
    try {
      const payload = {
        Username: email,
        Password: password,
      };
      const res = await axios.post(
        "http://localhost:5020/user/login",

        payload
      );
      //
      console.log(res);

      if (res.data.username) {
        localStorage.setItem("token", res.data.username);
        setUser(res.data.username);

        toast.success(res.data.message);
        return res?.data?.username;
      }
    } catch (error) {
      // Handle error and display the correct error message
      console.error("Login Error:", error);

      // Check if error has a response and display the message
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  const signup = async (email, password) => {
    try {
      console.log(email, password);
      const payload = {
        Username: email,
        Password: password,
      };

      const response = await axios.post(
        "http://localhost:5020/user/signup",
        payload
      );

      // Log the response for debugging
      console.log(response.data);

      // Check if the signup was successful
      if (response.data.id) {
        // Display success message
        toast.success(response.data.message || "Signup successful!");
      }
    } catch (error) {
      console.error("Signup Error:", error);

      // Display error message if available
      if (error?.response && error?.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, fetchCourese }}>
      {children}
    </AuthContext.Provider>
  );
};
