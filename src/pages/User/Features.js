import React, { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const features = [
  {
    title: "Certification",
    description:
      "Define and Develop Digital Strategies to Deliver Business Growth",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-1.png",
  },
  {
    title: "Online Courses",
    description:
      "Define and Develop Digital Strategies to Deliver Business Growth",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-2.png",
  },
  {
    title: "Course Catalog",
    description:
      "Define and Develop Digital Strategies to Deliver Business Growth",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-3.png",
  },
  {
    title: "Progress Track",
    description:
      "Define and Develop Digital Strategies to Deliver Business Growth",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-4.png",
  },
  {
    title: "More Features",
    description:
      "Define and Develop Digital Strategies to Deliver Business Growth",
    icon: "https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/banner-user-1.png",
  },
];

const Features = () => {
  const scrollContainerRef = useRef(null);

  // Scroll function
  const scrollHorizontally = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 300; // Amount to scroll in pixels
    if (container) {
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="bg-[#FFFAE8] py-16">
      {/* Section Container */}
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-bold uppercase">★ Features</p>
          <h2 className="text-4xl font-bold text-gray-800">
            Exclusive <span className="text-orange-500">Features</span>
          </h2>
        </div>

        {/* Scrollable Feature Cards */}
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-none bg-white rounded-lg shadow-lg p-6 w-72 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 flex w-full justify-between px-4">
            <button
              onClick={() => scrollHorizontally("left")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center"
            >
              <FaArrowCircleLeft className="w-10 h-10" />
            </button>
            <button
              onClick={() => scrollHorizontally("right")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center"
            >
              <FaArrowCircleRight className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
