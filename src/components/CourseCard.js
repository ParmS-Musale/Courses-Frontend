import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import moment from 'moment';


function CourseCard({ course }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleBuyCourse = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:5020/users/purchase",
          { courseId: course.id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);

        toast.success("Successfully purchased the course!");
      } catch (error) {
        console.error("Error purchasing course:", error);
        toast.error(
          error.response?.data?.message || "Failed to purchase the course."
        );
      } finally {
        setLoading(false);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5 ">
        <h5 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h5>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-600 font-semibold">₹{course.price}</span>
          <span className="bg-blue-100 text-gray-600 text-xs font-bold rounded-full">
            {moment(course.updatedAt).format('DD MMM YYYY, hh:mm A')}
          </span>
        </div>
        <button
          onClick={handleBuyCourse}
          className={`w-full bg-orange-600 text-white font-semibold py-2 rounded-lg shadow-md ${loading ? "cursor-not-allowed opacity-75" : "hover:bg-orange-700"
            }`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="spinner-border spinner-border-sm mr-2"></div>
              Processing...
            </div>
          ) : (
            "Buy Course"
          )}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
