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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_ow61ect";
    const templateID = "template_nw912h4"; // Replace with your template ID
    const publicKey = "E_A9drDhbP4C70eJm"; // Replace with your public key

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
    <section className="bg-gray-50 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Have a Question? <span className="text-orange-600">Contact Us!</span>
        </h1>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center">
        {/* Contact Info */}
        <div className="w-full md:w-5/12 lg:w-4/12 bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-500 rounded-full">
                📧
              </div>
              <div className="ml-4">
                <p className="text-gray-600 font-medium">Email Us:</p>
                <p className="text-gray-800">musaleparm9541@email.com</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-500 rounded-full">
                📞
              </div>
              <div className="ml-4">
                <p className="text-gray-600 font-medium">Call Us:</p>
                <p className="text-gray-800">+91 8010671447</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-6/12 lg:w-5/12 bg-white shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
