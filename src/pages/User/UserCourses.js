import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader } from "../../components/Loader";
import moment from "moment";


const PurchasedCourseCard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the purchased courses from the backend
  const fetchPurchasedCourses = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to view your courses.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5020/users/purchase", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching purchased courses:", error);
      toast.error("Failed to fetch purchased courses.");
    } finally {
      setLoading(false);
    }
  };

  // Delete the course from the backend and update the state
  const handleDeleteCourse = async (courseId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to delete a course.");
      return;
    }

    try {
      // Call the DELETE API to remove the course
      const response = await axios.delete(
        `http://localhost:5020/users/purchase/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Course Remove Successfully"); // Show success message
      // Remove the course from the UI
      setCourses(courses.filter((course) => course.id !== courseId));
    } catch (error) {
      console.error("Error Removing course:", error);
      toast.error("Failed to Remove the course.");
    }
  };

  useEffect(() => {
    fetchPurchasedCourses();
  }, []);

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-4">Your Purchased Courses 📚</h2>
        {loading ? (
          <p className="text-center"><Loader /></p>
        ) : courses.length > 0 ? (
          <div className="row">
            {courses.map((course) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={course.id}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out h-100 d-flex flex-column">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-5 flex-grow-1 d-flex flex-column">
                    <h5 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h5>
                    <p className="text-gray-600 text-sm mb-4 flex-grow-1">{course.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-blue-600 font-semibold">₹{course.price}</span>
                      {/* <span className="bg-blue-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                        {moment(course.updatedAt).format('DD MMM YYYY, hh:mm A')}
                      </span> */}
                    </div>
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => handleDeleteCourse(course.id)} // Delete course when button is clicked
                    >
                      Remove Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No purchased courses found.</p>
        )}
      </div>
    </>

  );
};

export default PurchasedCourseCard;
