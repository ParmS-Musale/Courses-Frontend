import React, { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-none bg-white shadow-md rounded-lg p-6 w-80 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover border-2 border-orange-500"
        />
        <div className="ml-4">
          <h5 className="text-lg font-bold text-gray-800">
            {testimonial.name}
          </h5>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
          <div className="text-yellow-400 flex">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      </div>
      <h6 className="font-bold text-gray-700 mb-2 text-center">
        {testimonial.courseName}
      </h6>
      <p className="text-sm text-gray-600 text-justify">
        "{testimonial.feedback}"
      </p>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Niraj Waliya",
      role: "Student",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFuK2JImexW9g/profile-displayphoto-shrink_200_200/0/1674758352007?e=2147483647&v=beta&t=eiyBNLC6H4ECKDtwoCMcY6BWjaEXZHTOM1hKt21W5VA",
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
    {
      id: 2,
      name: "Code With Harry",
      role: "Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvoSklruFU7Pe1D-oqSe56gNJAWkwdv0YnTA&s",
      rating: 5,
      courseName: "JavaScript Mastery",
      feedback:
        "An amazing experience. This course helped me refine my coding skills and gave me confidence as a developer.",
    },
    {
      id: 3,
      name: "Donald Trumph",
      role: "Developer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/800px-Donald_Trump_official_portrait.jpg",
      rating: 5,
      courseName: "JavaScript Mastery",
      feedback:
        "An amazing experience. This course helped me refine my coding skills and gave me confidence as a developer.",
    },
    {
      id: 4,
      name: "Andrew Tate",
      role: "Developer",
      image:
        "https://static01.nyt.com/images/2022/08/24/multimedia/24xp-tate/24xp-tate-superJumbo.jpg",
      rating: 5,
      courseName: "JavaScript Mastery",
      feedback:
        "An amazing experience. This course helped me refine my coding skills and gave me confidence as a developer.",
    },
    {
      id: 5,
      name: "Saurabh Netravalka",
      role: "software engineer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvG7PhK0f2p6BZKGt72-tJCzOGKvCfleJUpQ&s",
      rating: 4,
      courseName: "UI/UX Design Essentials",
      feedback:
        "Practical lessons and industry insights. The hands-on projects helped me build a professional portfolio.",
    },
  ];

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
    <section className="bg-gradient-to-b from-yellow-50 to-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <p className="text-green-600 font-bold uppercase tracking-wide">
            ✨ Testimonials
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800">
            What Our <span className="text-orange-500">Students Say</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from our students about how our courses have transformed their
            careers and learning journeys.
          </p>
        </div>

        <div className="relative">
          {/* Scrollable Testimonials */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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
}

export default Testimonials;
