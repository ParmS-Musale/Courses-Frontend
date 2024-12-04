import React, { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const features = [
  {
    title: "Certification",
    description:
      "Gain industry-recognized certifications to advance your career.",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-1.png",
  },
  {
    title: "Online Courses",
    description:
      "Explore a wide range of courses taught by industry experts.",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-2.png",
  },
  {
    title: "Course Catalog",
    description:
      "Browse a curated catalog of courses tailored to your needs.",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-3.png",
  },
  {
    title: "Progress Track",
    description:
      "Keep track of your learning progress and achievements.",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-4.png",
  },
  {
    title: "More Features",
    description: "Discover more tools and resources to excel in learning.",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-1.png",
  },
];

const Features = () => {
  const scrollContainerRef = useRef(null);

  const scrollHorizontally = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#FFFAE8] py-16">
      {/* Section Container */}
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-green-500 font-bold uppercase tracking-wider">
            ★ Features
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Exclusive <span className="text-orange-500">Features</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our platform's standout features designed to enhance your
            learning experience and help you achieve your goals.
          </p>
        </div>

        {/* Scrollable Feature Cards */}
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-none bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6 w-80"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 flex w-full justify-between px-4">
            <button
              onClick={() => scrollHorizontally("left")}
              className="bg-gray-500 hover:bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Scroll left"
            >
              <FaArrowCircleLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollHorizontally("right")}
              className="bg-gray-500 hover:bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Scroll right"
            >
              <FaArrowCircleRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
