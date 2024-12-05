import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      setIsLoading(true); // Set loading to true when request starts
      const payload = { Username: email, Password: password };
      const res = await axios.post("http://localhost:5020/user/login", payload);
      console.log(res);
      
      if (res.data) {
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/"); // Redirect after successful login
      }
    } catch (error) {
      console.error("Login Error:", error);
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false); // Reset loading state after request completes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleGoogleLogin = (response) => {
    if (response?.credential) {
      const decoded = jwtDecode(response.credential);
      console.log(decoded);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen bg-white">
      {/* Left Illustration */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br p-8">
        <div className="flex flex-col justify-center items-center h-full">
          <img
            src="/assets/Login BG.jpg"
            alt="Illustration"
            className="w-full max-w-md"
          />
          <h1 className="text-4xl font-bold">Welcome to CourseHub 📚</h1>
          <p className="text-lg mt-4">Start your learning journey with us.</p>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 w-full px-8">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Login to Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email or Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:bg-gray-400"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Create one
            </a>
          </p>
          {/* Social Login */}
          <div className="mt-6 flex flex-col space-y-2">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => console.log("Google Login Failed")}
            ></GoogleLogin>
            <button className="w-full py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900">
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
