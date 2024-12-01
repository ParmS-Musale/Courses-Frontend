import React from "react";
import { Link, Links } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-gray-800 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and About */}
        <div>
          <img src="assets/Logo.png " alt="Logo" className="w-15 h-10 mr-3" />
          <span className="text-2xl font-bold text-green-600 mb-4">
            CourseHub
          </span>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur. Velit interdum tellus elit
            diam amet eleifend suspendisse.
          </p>
          <h3 className="font-bold">Follow Us!</h3>
          <div className="flex mt-2 space-x-3">
            <FaInstagram /> <FaFacebook />
            <FaGithub />
          </div>
        </div>

        {/* Popular Courses */}
        <div>
          <h3 className="font-bold text-lg mb-4">Popular Courses</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Digital Marketing</li>
            <li>Business Management</li>
            <li>Graphic Design</li>
            <li>Human Resources</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <Link
              to={"/"}
              className="text-decoration-none text-black hover:text-orange-600"
            >
              Home Page
            </Link>
            <br />
            <Link
              to={"/about"}
              className="text-decoration-none text-black hover:text-orange-600"
            >
              About Us
            </Link>
            <br />
            <Link
              to={"/all-course"}
              className="text-decoration-none text-black hover:text-orange-600"
            >
              Courses
            </Link>
            <br />
            <Link
              to={"/signup"}
              className="text-decoration-none text-black hover:text-orange-600"
            >
              Signup
            </Link>
            <br />
            <Link
              to={"/login"}
              className="text-decoration-none text-black hover:text-orange-600"
            >
              Login
            </Link>
            <br />
            <Link
              to={"/contact"}
              className="text-decoration-none text-black hover:text-orange-600"
            >
              Contact
            </Link>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-sm mb-2">
            📞 +91 8010671447{" "}
            <span className="text-purple-600 font-bold">FREE</span>
          </p>
          <p className="text-sm mb-4">📧 musaleparm9541@gmail.com</p>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="text-center text-sm">
        <p>
          © {new Date().getFullYear()} All Rights Reserved.{" "}
          <span className="text-green-600 font-bold">CourseHub</span>. Design &
          Developed By <span className="font-bold">Parm Dev 👨‍💻</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
