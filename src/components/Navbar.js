import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const token = localStorage.getItem("token");
  const username = token ? localStorage.getItem("username") : null; // Retrieve username from localStorage
  const role = token ? localStorage.getItem("role") : null; // Retrieve role from localStorage
  const location = useLocation();
  const showSearchBar = location.pathname === "/all-course";

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center text-decoration-none">
          <img
            src="assets/Logo.png"
            alt="Logo"
            className="w-12 h-12 mr-3 items-start"
          />
          <span className="text-xl font-semibold text-gray-800">CourseHub</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 text-decoration-none text-xl"
          >
            Home
          </Link>

          <Link
            to="/all-course"
            className="text-gray-700 hover:text-blue-600 transition duration-300 text-decoration-none text-xl"
          >
            Courses
          </Link>
          {role === "admin" && (
            <Link
              to="/add-course"
              className="text-gray-700 hover:text-blue-600 transition duration-300 text-decoration-none text-xl"
            >
              Add Courses
            </Link>
          )}
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-blue-600 transition duration-300 text-decoration-none text-xl"
          >
            Dashboard
          </Link>
        </div>

        {/* Search Bar */}
        {showSearchBar && (
          <div className="hidden lg:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        )}

        {/* Login Button */}
        {!token && (
          <Link
            to="/login"
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 text-decoration-none"
          >
            Login
          </Link>
        )}
        {token && (
          <Link
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("username");
              localStorage.removeItem("role");
            }}
            to="/login"
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 text-decoration-none"
          >
            Logout
          </Link>
        )}

        {/* User Icon and Details */}
        {token && (
          <div className="flex items-center ml-6">
            <FaUserCircle className="text-gray-700 text-3xl" />
            <div className="ml-2 flex-wr">
              <span className="block text-gray-800 font-medium">{username}</span>
              <span className="block text-gray-500 text-sm">{role}</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
