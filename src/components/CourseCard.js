import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State to track loading status



  // Handle course purchase
  const handleBuyCourse = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoading(true); // Set loading to true when the purchase starts

      try {
        // Make an API call to purchase the course
        const response = await axios.post(
          "http://localhost:5020/users/purchase",
          { courseId: course.id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        toast.success(`Successfully purchased ${course.title}!`);
      } catch (error) {
        console.error("Error purchasing course:", error);
        if (error.response && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Failed to purchase course.");
        }
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full sm:w-80 md:w-96 lg:w-1/4 p-3">
      <div className="card shadow-lg rounded-lg overflow-hidden">
        <img
          src={course.imageUrl}
          className="card-img-top w-full h-48 object-cover"
          alt={course.title}
        />
        <div className="card-body p-3">
          <h5 className="card-title font-bold text-lg mb-2">{course.title}</h5>
          <p className="card-text text-gray-700 mb-4">{course.description}</p>
          <p className="card-text text-gray-700 mb-4">
            Price: ₹ {course.price}
          </p>
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={handleBuyCourse}
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              "Buy Course"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
