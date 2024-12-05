import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AllUsers from "./Admin/AllUsers";
import PurchasedCourseCard from "./User/UserCourses";
import Navbar from "../components/Navbar";
import { Loader } from "../components/Loader";

const Dashboard = () => {
  const [isSidebarOpen] = useState(true);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null); // Role of the logged-in user
  const navigate = useNavigate();

  // Fetch the current user role and data
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5020/users/purchase/info",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const { role } = response.data; // Assume backend returns { role: "admin" | "user" }
      setUserRole(role);

      // If admin, fetch all users
      if (role === "admin") {
        const userResponse = await axios.get(
          "http://localhost:5020/admin/user",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUsers(userResponse.data); // Assume response.data is an array of users
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      navigate("/login"); // Redirect to login if not authenticated
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  // Display loader while fetching data
  if (loading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen bg-[#FFFBEA]"
        style={{ height: "100vh" }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex min-h-screen bg-[#FFFBEA]">
        {/* Sidebar */}
        <div
          className={`bg-slate-900 text-white w-64 p-4 ${
            isSidebarOpen ? "block" : "hidden"
          } lg:block`}
        >
          <h2 className="text-2xl font-bold text-center text-orange-300">
            {userRole === "admin" ? "Admin Panel" : "User Panel"}
          </h2>
          <ul className="mt-6">
            <li>
              <Link
                to="/"
                className=" text-white hover:text-[#FF8C00] transition duration-300 text-decoration-none text-xl"
              >
                &#x2022; Home
              </Link>
            </li>

            {userRole === "admin" && (
              <li>
                <Link
                  to="/all-users"
                  className=" text-white hover:text-[#FF8C00] transition duration-300 text-decoration-none text-xl"
                >
                  &#x2022; Users
                </Link>
                <br />
                <Link
                  to="/add-course"
                  className=" text-white hover:text-[#FF8C00] transition duration-300 text-decoration-none text-xl"
                >
                  &#x2022; Add Courses
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {userRole === "admin" ? (
            <div>
              <AllUsers /> {/* Render admin content */}
            </div>
          ) : (
            <div>
              <PurchasedCourseCard /> {/* Render user content */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
