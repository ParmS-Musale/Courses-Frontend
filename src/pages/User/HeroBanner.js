import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="bg-[#FFFBEA] relative">
      <div className="container mx-auto px-6 lg:px-16 py-16 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Eyebrow Text */}
          <p className="text-[#045762] text-lg font-medium flex items-center justify-center lg:justify-start mb-4">
            <span className="mr-2">✨</span> Guaranteed & Certified
          </p>

          {/* Main Heading */}
          <h1 className="text-[#1F2937] font-bold text-4xl lg:text-5xl leading-snug mb-4">
            Your Future Starts <br />
            <span className="text-[#FF8C00]">Online Learning</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-lg mb-6">
            Discover a wide range of courses designed to help you learn new
            skills, improve your knowledge, and achieve your educational goals.
            Our platform offers an intuitive interface for managing courses,
            tracking progress, and accessing high-quality content at your own
            pace.
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              to="/all-course"
              className="bg-[#FF8C00] text-white py-3 px-6 rounded-full font-medium hover:bg-[#e57b00] transition duration-300 text-decoration-none"
            >
              Explore Courses
            </Link>
            <Link
              to="/"
              className="bg-white border-2 border-[#FF8C00] text-[#FF8C00] py-3 px-5 rounded-full font-medium hover:bg-[#FF8C00] hover:text-black transition duration-300 text-decoration-none"
            >
              Read More
            </Link>
          </div>

          {/* Students Info */}
          <div className="flex items-center mt-8">
            <div className="flex -space-x-2">
              <img
                src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/user-3.png"
                alt="Student 1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/user-1.png"
                alt="Student 2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/user-4.png"
                alt="Student 3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/user-3.png"
                alt="Student 4"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-gray-700 text-lg font-medium ml-4">
              50,000+ Students
            </p>
          </div>
        </div>
        {/* Decorative Line */}
        <div>
          <img src="/assets/arrow-line.png" alt="Arrow" />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center relative">
          <img
            src="/assets/hero-image.png"
            alt="Hero Banner"
            className="z-10 w-[80%] lg:w-[90%] max-w-lg rounded-lg"
          />
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 left-6 w-20 h-20 bg-[#FFF3E4] rounded-full"></div>
          <div className="absolute top-10 right-10">
            <span className="text-[#FF8C00] text-2xl">✦</span>
          </div>
          <div className="absolute top-16 right-20 w-12 h-12 border-2 border-[#FF8C00] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
