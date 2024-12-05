import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import axios from "axios";
import { Loader } from "../../components/Loader";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch courses from API
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5020/courses");
      console.log(response);
      setCourses(response?.data || []); // Safeguard in case response data is undefined
      setLoading(false);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setLoading(false);
    }
  };

  // Fetch courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Show loader if data is still being fetched
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );

  // Render course cards
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Featured <span className="text-orange-500">Courses</span>
      </h2>
      {/* Grid layout for course cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="text-center col-span-full">
            <p className="text-gray-500 text-lg"><Loader/></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseList;
