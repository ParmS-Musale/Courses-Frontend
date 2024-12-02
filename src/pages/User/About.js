import React from "react";

const About = () => {
  return (
    <section className="bg-[#FFFBEA] py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about1.jpg"
                alt="Student 1"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about2.jpg"
                alt="Student 2"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about3.jpg"
                alt="Student 3"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-gradient-to-r from-orange-300 to-orange-500 rounded-lg shadow-lg text-white p-6 flex flex-col justify-center items-center">
                <p className="text-4xl font-bold">15</p>
                <p className="text-lg">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div>
            <p className="text-green-500 text-2xl font-bold uppercase mt-2 text-center">
              About CourseHub 📚
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Discover Our Vision for Digital{" "}
              <span className="text-orange-500">Education</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Our Mission & Vision
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-6">
              {/* <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition">
                View All Categories →
              </button> */}
              <div className="flex items-center gap-3">
                <img
                  src="https://avatars.githubusercontent.com/u/152637541?v=4"
                  alt="CEO"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-800">ParmS Musale</p>
                  <p className="text-sm text-gray-600">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
