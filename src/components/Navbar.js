import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="shadow-sm bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-3 px-6 ">
        {/* Logo */}
        <div className="mr-9">
          <Link to="/" className="flex items-center text-decoration-none outline-none">
            <img src="assets/Logo.png" alt="Logo" className="w-15 h-10 mr-3" />
            <span className="text-3xl font-bold text-[#FF8C00] ">
              CourseHub
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-lg text-[#333] hover:text-[#FF8C00] transition text-decoration-none"
          >
            &#x2022; Home
          </Link>
          <Link
            to="/courses"
            className="text-lg text-[#333] hover:text-[#FF8C00] transition text-decoration-none"
          >
            &#x2022; Course
          </Link>
          <Link
            to="/about"
            className="text-lg text-[#333] hover:text-[#FF8C00] transition text-decoration-none"
          >
            &#x2022; About Us
          </Link>
          <Link
            to="/blog"
            className="text-lg text-[#333] hover:text-[#FF8C00] transition text-decoration-none"
          >
            &#x2022; Blog
          </Link>
          <Link
            to="/contact"
            className="text-lg text-[#333] hover:text-[#FF8C00] transition text-decoration-none"
          >
            &#x2022; Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-lg text-[#333] hover:text-[#FF8C00] transition text-decoration-none"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#FF8C00] text-white px-6 py-2 rounded-full hover:bg-[#e57b00] transition text-decoration-none"
              >
                Signup
              </Link>
            </>
          ) : (
            <Link
              onClick={() => {
                localStorage.removeItem("token");
              }}
              to="/login"
              className="bg-[#FF8C00] text-white px-6 py-2 rounded-full hover:bg-[#e57b00] transition text-decoration-none"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
