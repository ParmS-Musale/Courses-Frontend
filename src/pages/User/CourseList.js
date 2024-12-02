import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import axios from "axios";
import { Loader } from "../../components/Loader";

function CourseList() {
  const [courses, setcourses] = useState();
  const [loading, setLoading] = useState(false);

  const fetchCourese = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5020/courses");
      console.log(response);
      setcourses(response?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourese();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
