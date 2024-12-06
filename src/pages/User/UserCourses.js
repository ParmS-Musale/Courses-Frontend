import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader } from "../../components/Loader";


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

      toast.success("Course Deleted Successfully"); // Show success message
      // Remove the course from the UI
      setCourses(courses.filter((course) => course.id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Failed to delete the course.");
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
          <p className="text-center"><Loader/></p>
        ) : courses.length > 0 ? (
          <div className="row">
            {courses.map((course) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={course.id}>
                <div className="card h-100 shadow-lg rounded">
                  <img
                    src={course.imageUrl || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={course.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-weight-bold">
                      {course.title}
                    </h5>
                    <p className="card-text text-muted">{course.description}</p>
                    <div className="mt-auto">
                      <p className="text-primary font-weight-bold">
                        ₹ {course.price}
                      </p>
                      <button
                        className="btn btn-danger w-100"
                        onClick={() => handleDeleteCourse(course.id)} // Delete course when button is clicked
                      >
                        Delete Course
                      </button>
                    </div>
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
