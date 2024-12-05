import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar({ refs }) {
  const token = localStorage.getItem("token");
  const [data, setdata] = useState("");

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5020/users/purchase/info",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      debugger
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleScroll = (sectionRef) => {
    sectionRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="shadow-sm bg-slate-50 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="mr-5">
          <span className="flex items-center text-decoration-none outline-none cursor-pointer">
            <img src="assets/Logo.png" alt="Logo" className="w-15 h-10 mr-3" />
            <span className="text-3xl font-bold text-[#FF8C00]">CourseHub</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => handleScroll(refs?.homeRef)}
            className="text-lg text-[#333] hover:text-[#FF8C00] transition focus:outline-none"
          >
            &#x2022; Home
          </button>
          <button
            onClick={() => handleScroll(refs?.aboutRef)}
            className="text-lg text-[#333] hover:text-[#FF8C00] transition focus:outline-none"
          >
            &#x2022; About Us
          </button>
          <button
            onClick={() => handleScroll(refs?.coursesRef)}
            className="text-lg text-[#333] hover:text-[#FF8C00] transition focus:outline-none"
          >
            &#x2022; Courses
          </button>

          <button
            onClick={() => handleScroll(refs?.featuresRef)}
            className="text-lg text-[#333] hover:text-[#FF8C00] transition focus:outline-none"
          >
            &#x2022; Features
          </button>
          <button
            onClick={() => handleScroll(refs?.contactRef)}
            className="text-lg text-[#333] hover:text-[#FF8C00] transition focus:outline-none"
          >
            &#x2022; Contact
          </button>

          <Link
            to="/dashboard"
            className=" text-[#333] hover:text-[#FF8C00] transition duration-300 text-decoration-none text-xl"
          >
            &#x2022; Dashboard
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
