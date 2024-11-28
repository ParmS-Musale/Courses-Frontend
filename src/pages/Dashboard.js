import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AllUsers from "./Admin/AllUsers";
import PurchasedCourseCard from "./User/UserCourses";
import Navbar from "../components/Navbar";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`bg-slate-900 text-white w-64 p-4 ${
            isSidebarOpen ? "block" : "hidden"
          } lg:block`}
        >
          <h2 className="text-2xl font-bold">
            {userRole == "admin" ? "Admin Panel" : "User Panel"}
          </h2>
          <ul className="mt-6">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-white rounded text-decoration-none"
              >
                Home
              </Link>
            </li>

            {userRole === "admin" && (
              <li>
                <Link
                  to="/all-users"
                  className="block py-2 px-4 text-white rounded text-decoration-none"
                >
                  Users
                </Link>
              </li>
            )}

          
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          {userRole === "admin" ? (
            <div>
              <AllUsers /> {/* Pass the users array */}
            </div>
          ) : (
            <div>
              <PurchasedCourseCard />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
