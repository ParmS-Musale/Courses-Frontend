import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full sm:w-[28%]">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h5 className="text-lg font-bold text-gray-800">
            {testimonial.name}
          </h5>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
          <div className="text-yellow-500 flex">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      </div>
      <h6 className="font-bold text-gray-700 mb-2">
        {testimonial.courseName}
      </h6>
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
      image: "https://media.licdn.com/dms/image/D4D03AQFuK2JImexW9g/profile-displayphoto-shrink_200_200/0/1674758352007?e=2147483647&v=beta&t=eiyBNLC6H4ECKDtwoCMcY6BWjaEXZHTOM1hKt21W5VA", // Replace with actual images
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
    {
      id: 2,
      name: "Code With Harry",
      role: "Student",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvoSklruFU7Pe1D-oqSe56gNJAWkwdv0YnTA&s",
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
    {
      id: 3,
      name: "Donald Trumph",
      role: "Student",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZvUgKD07p_32Tuqm9Hxu5GdegdbFEZdFpg&s",
      rating: 5,
      courseName: "Front-End Web Development",
      feedback:
        "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    },
  ];

  return (
    <div className="bg-yellow-50 py-10">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          ✨ Testimonials
        </h2>
        <h3 className="text-center text-2xl font-bold text-gray-800 mb-8">
          What Our <span className="text-green-600">Students Say</span>
        </h3>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center">
          <FaArrowCircleLeft className="w-10 h-10" />
          </button>
          <button className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center">
          <FaArrowCircleRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
