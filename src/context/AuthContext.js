import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const fetchCourese = async () => {
    const response = await axios.get("http://localhost:5020/courses");
    return response.data;
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
    <AuthContext.Provider value={{ signup, fetchCourese }}>
      {children}
    </AuthContext.Provider>
  );
};
