import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS details
    const serviceID = "service_ow61ect";
    const templateID = "template_nw912h4"; // Replace with your template ID
    const publicKey = "E_A9drDhbP4C70eJm";   // Replace with your public key

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", website: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send the message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between bg-white shadow-lg rounded-lg p-6">
          {/* Left Section */}
          <div className="w-full md:w-1/2 lg:w-5/12 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Contact <span className="text-orange-500">Us</span>
            </h2>
            <h3 className="text-4xl font-bold text-gray-800">
              Get In <span className="text-orange-500 ">Touch</span>
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-500 rounded-full">
                  📧
                </div>
                <span className="ml-4 text-gray-600">
                  Email-Us: <br />
                  <span className="font-medium">musaleparm9541@email.com</span>
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-500 rounded-full">
                  📞
                </div>
                <span className="ml-4 text-gray-600">
                  Call Us: <br />
                  <span className="font-medium">+91 8010671447</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 lg:w-6/12 p-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="flex-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="flex-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
              </div>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website Address"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message*"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 focus:outline-none"
              >
                Send Message
              </button>
              {status && (
                <p className="mt-2 text-sm text-gray-700">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
