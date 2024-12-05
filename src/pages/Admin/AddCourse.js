import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar";

const AddCourseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFormError("");

    const courseData = {
      title: data.title,
      description: data.description,
      courseDescription: data.courseDescription,
      price: parseFloat(data.price),
      imageUrl: data.imageUrl,
    };

    try {
      const response = await axios.post(
        "http://localhost:5020/admin/courses",
        courseData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.id) {
        toast.success("Course added successfully");
        navigate("/all-course");
      } else {
        throw new Error(response?.data.message);
      }
    } catch (error) {
      setFormError(error.message || "Something went wrong");
      console.error("Error adding course:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="container mx-auto px-6 py-10 bg-[#FFFBEA]">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Add <span className="text-orange-500">New Course</span>
        </h2>

        {formError && (
          <div className="bg-red-100 text-red-600 p-4 rounded-md mb-4 text-center">
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Course Title */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Course Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Course title is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter course title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Short Description
            </label>
            <input
              type="text"
              {...register("description", {
                required: "Short description is required",
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter a short description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Detailed Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Detailed Description
            </label>
            <textarea
              {...register("courseDescription", {
                required: "Detailed description is required",
              })}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter detailed course description"
            />
            {errors.courseDescription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.courseDescription.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter course price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              {...register("imageUrl", { required: "Image URL is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter image URL"
            />
            {errors.imageUrl && (
              <p className="text-red-500 text-sm mt-1">{errors.imageUrl.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding Course..." : "Add Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddCourseForm;
