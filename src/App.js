import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/User/Home";
import Courses from "./pages/User/Courses";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import AddCourseForm from "./pages/Admin/AddCourse";
import AllUsers from "./pages/Admin/AllUsers";
import HeroBanner from "./pages/User/HeroBanner";
import About from "./pages/User/About";
import Contact from "./pages/User/Contact";
import Features from "./pages/User/Features";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/all-course",
    element: <Courses />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  {
    path: "/add-course",
    element: <AddCourseForm />,
  },
  {
    path: "/all-users",
    element: <AllUsers />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/",
    element: <HeroBanner />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <div>
      <ToastContainer />
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
