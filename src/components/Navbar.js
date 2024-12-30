import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";

function Navbar({ refs }) {
  const token = localStorage.getItem("token");
  const [data, setdata] = useState("");
  const [isOnline, setIsOnline] = useState(window.navigator.onLine); // Added state for online/offline status

  console.log(data);

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

      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();

    // Adding event listeners for online and offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      // Cleanup event listeners on unmount
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
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
          <Link
            to="/"
            className="flex items-center text-decoration-none outline-none cursor-pointer"
          >
            <img src="assets/Logo.png" alt="Logo" className="w-15 h-10 mr-3" />
            <span className="text-3xl font-bold text-[#FF8C00]">CourseHub</span>
          </Link>
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

        {/* User Icon and Details */}
        {token && (
          <div className="flex items-center ml-1 relative">
            <div className="relative">
              {/* User Icon */}
              <FaUserCircle className="text-gray-700 text-4xl" />
              {/* Online/Offline Status */}
              <span
                className={`absolute top-5 left-5 h-4 w-4 rounded-full border-2 border-white ${isOnline ? "bg-green-500" : "bg-red-500"
                  }`}
              ></span>
            </div>
            <div className="ml-2 flex-wr">
              <span className="block text-gray-800 font-medium">
                {data.username}
              </span>
              <span className="block text-gray-500 text-sm">{data.role}</span>
            </div>
          </div>
        )}

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
