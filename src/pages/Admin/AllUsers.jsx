import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5020/admin/user", {
        headers: {
          username: localStorage.getItem("token"),
        },
      });
      console.log(response);

      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle deleting a user
  const deleteUser = async (userId) => {
    try {
      // Send delete request to backend
      await axios.delete(`http://localhost:5020/admin/user/${userId}`, {
        headers: {
          username: localStorage.getItem("token"),
        },
      });
      toast.success("User Deleted Succesfully..!!")
      // Remove the deleted user from the local state
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto mt-12 p-6 bg-gray-50 shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          All Registered Users
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">
                    #
                  </th>
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">
                    Username
                  </th>
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">
                    Password
                  </th>
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-6 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 border-b transition duration-300 ease-in-out"
                    >
                      <td className="py-4 px-6">{index + 1}</td>
                      <td className="py-4 px-6">{user.username}</td>
                      <td className="py-4 px-6">{user.password}</td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="px-2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default AllUsers;
