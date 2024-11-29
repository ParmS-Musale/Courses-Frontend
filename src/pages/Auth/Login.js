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
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-transparent">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Login to CourseHub 📚
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 text-white bg-green-500 rounded-lg hover:bg-green-600 disabled:bg-gray-400"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-500 hover:text-green-400">
            Sign up
          </a>
        </p>
        <div className="mt-6">
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => toast.error("Google Login Failed")}
              useOneTap
              shape="pill"
              className="w-full py-2 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
