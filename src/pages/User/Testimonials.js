import React, { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-none bg-white shadow-lg rounded-lg p-6 w-72 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h5 className="text-lg font-bold text-gray-800">{testimonial.name}</h5>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
          <div className="text-yellow-500 flex">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      </div>
      <h6 className="font-bold text-gray-700 mb-2">{testimonial.courseName}</h6>
      <p className="text-sm text-gray-600">{testimonial.feedback}</p>
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
      role: "Student",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvoSklruFU7Pe1D-oqSe56gNJAWkwdv0YnTA&s",
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
    {
      id: 3,
      name: "Donald Trump",
      role: "Student",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZvUgKD07p_32Tuqm9Hxu5GdegdbFEZdFpg&s",
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
    {
      id: 3,
      name: "Donald Trump",
      role: "Student",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZvUgKD07p_32Tuqm9Hxu5GdegdbFEZdFpg&s",
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
    {
      id: 3,
      name: "Donald Trump",
      role: "Student",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZvUgKD07p_32Tuqm9Hxu5GdegdbFEZdFpg&s",
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
    {
      id: 3,
      name: "Donald Trump",
      role: "Student",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZvUgKD07p_32Tuqm9Hxu5GdegdbFEZdFpg&s",
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
    {
      id: 3,
      name: "Donald Trump",
      role: "Student",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZvUgKD07p_32Tuqm9Hxu5GdegdbFEZdFpg&s",
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
  ];

  const scrollContainerRef = useRef(null);

  // Scroll function
  const scrollHorizontally = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 300; // Adjust scroll amount
    if (container) {
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="bg-yellow-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <p className="text-green-600 font-bold uppercase">✨ Testimonials</p>
          <h2 className="text-4xl font-bold text-gray-800">
            What Our <span className="text-orange-500">Students Say</span>
          </h2>
        </div>

        <div className="relative">
          {/* Scrollable Testimonials */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
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
}

export default Testimonials;
