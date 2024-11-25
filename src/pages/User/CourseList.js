import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import axios from "axios";

// const courses = [
//   {
//     id: 1,
//     title: "JavaScript Essentials",
//     description: "Learn the fundamentals of JavaScript.",
//     image: "https://img-c.udemycdn.com/course/750x422/1468694_d595_2.jpg",
//     price : "5,000",
//     updated: "2 days",
//   },
//   {
//     id: 2,
//     title: "React for Beginners",
//     description: "Build modern web apps using React.",
//     image: "https://miro.medium.com/v2/resize:fit:1200/1*QLGrPafX6UPov-gamtMUJg.png",
//     price : "5,000",
//     updated: "5 days",
//   },
//   {
//     id: 3,
//     title: "Node.js & Express",
//     description: "Backend development with Node.js and Express.",
//     image: "https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?",
//     price : "5,000",
//     updated: "1 week",
//   },
//   {
//     id: 4,
//     title: "Python Programming",
//     description: "Master Python for data science and web development.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFGjIhIWLKlpcmUm7Hk4E7-lb6a5s6g-cDQ&s",
//     price : "5,000",
//     updated: "3 days",
//   },
//   {
//     id: 5,
//     title: "Machine Learning",
//     description: "Get started with machine learning algorithms.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaO1nUJFvoxQ-H3dv8pmEXGq-coajN2XBEnw&s",
//     price : "5,000",
//     updated: "4 days",
//   },
//   {
//     id: 6,
//     title: "Full-Stack Development",
//     description: "Become a full-stack developer using MERN stack.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJOH_3P-JxkwHusZN_Q5iFx9tC9nEOT99fw&s",
//     price : "5,000",
//     updated: "2 weeks",
//   },
//   {
//     id: 7,
//     title: "Data Structures & Algorithms",
//     description: "Optimize your code with data structures.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAc8_cLo4epvagqgV3t57k1KeRclDdl7Dzg&s",
//     price : "5,000",
//     updated: "6 days",
//   },
//   {
//     id: 8,
//     title: "DevOps Essentials",
//     description: "Automate software delivery and infrastructure.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyKnzjr7RXdSwa_qf25iISQBANF0Vx3iF5A&s",
//     price : "5,000",
//     updated: "1 day",
//   },
//   {
//     id: 9,
//     title: "UI/UX Design",
//     description: "Design user-friendly interfaces.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0LMpglDpCgVl_ddRgIvFJ_DdiyKkwat0eQ&s",
//     price : "5,000",
//     updated: "3 hours",
//   },
// ];

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
    console.log(error)
   }
  };

  useEffect(() => {
    fetchCourese();
  }, []);

  if(loading) return <div>loading.....</div>

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
