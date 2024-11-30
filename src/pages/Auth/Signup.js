import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // State for username
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const data = signup(email, password);
    if (data != null) {
      navigate("/login");
    }
  };

  const handleGoogleSignIn = (response) => {
    if (response?.credential) {
      const decoded = jwtDecode(response.credential);
      console.log("Google User Info:", decoded);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen bg-white">
      {/* Right Illustration */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br">
        <div className="flex flex-col justify-center items-center h-full">
          <img
            src="/assets/Login BG.jpg"
            alt="Illustration"
            className="w-full max-w-md"
          />
          <h1 className="text-4xl font-bold">Join CourseHub Today 📚</h1>
          <p className="text-lg mt-4">Start learning and growing with us.</p>
        </div>
      </div>

      {/* Left Form */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 w-full px-8">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:bg-gray-400"
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-green-500 hover:underline">
              Login here
            </a>
          </p>
          {/* Social Signup */}
          <div className="mt-6 flex flex-col space-y-2">
            <GoogleLogin
              onSuccess={handleGoogleSignIn}
              onError={() => console.log("Google Sign-Up Failed")}
              className="w-full py-2 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            />
            <button className="w-full py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900">
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
