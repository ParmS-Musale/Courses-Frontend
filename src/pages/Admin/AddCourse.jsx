import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

    // Prepare the data to send to the API
    const courseData = {
      title: data.title,
      description: data.description,
      courseDescription: data.courseDescription,
      price: parseFloat(data.price), // Ensure price is a number
      imageUrl: data.imageUrl,
    };

    try {
      const response = await axios.post(
        "http://localhost:5020/admin/courses",
        courseData,
        {
          headers: {
            username: localStorage.getItem("token"),
          },
        }
      );
      console.log(response);

      if (response.data.id) {
        // Success - Trigger toast
        toast.success("Course added successfully");
        navigate("/all-course");
        // Optionally reset the form or show success message
      } else {
        // Handle non-successful responses (status not 200)
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
    <div>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Add New Course
        </h2>

        {formError && (
          <div className="text-red-600 mb-6 text-center">
            <p>{formError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Course Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Course title is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter course title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter a brief description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Course Description */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Course Description
            </label>
            <textarea
              {...register("courseDescription", {
                required: "Course description is required",
              })}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter detailed course description"
            />
            {errors.courseDescription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.courseDescription.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              {...register("imageUrl", { required: "Image URL is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter image URL"
            />
            {errors.imageUrl && (
              <p className="text-red-500 text-sm mt-1">
                {errors.imageUrl.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding Course..." : "Add Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseForm;
