import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
 

  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar/>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative">
        {/* Background Image with shadow and opacity */}
        <img
          src="assets/Course-background.png"
          alt="Background-Image"
          className="w-full h-[83vh] object-cover shadow-lg opacity-80"
        />

        {/* Content over the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50 px-6">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            Welcome to the Course Management System 🕮
          </h1>

          {/* Description Section */}
          <p className="text-white text-lg mb-8 max-w-4xl drop-shadow-md">
            Discover a wide range of courses designed to help you learn new
            skills, improve your knowledge, and achieve your educational goals.
            Our platform offers an intuitive interface for managing courses,
            tracking progress, and accessing high-quality content at your own
            pace.
          </p>

          {/* Button to Search Courses */}
          <Link
            to="/all-course"
            type="button"
            className="btn btn-success text-lg px-3 py-2 text-gray-700"
          >
            Search Courses
          </Link>
        </div>
      </div>

      {/* Uncomment this section for Course List */}
      {/* <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        <CourseList />
      </div> */}

      {/* Footer Section */}
      <footer className="bg-gray-200 text-black py-3">
        <div className="container mx-auto text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Course Management System. All rights
            reserved. <br />
            Made With Parm Dev..👨‍💻
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
