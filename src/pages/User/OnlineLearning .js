import React from "react";

const OnlineLearning = () => {
  return (
    <div className="bg-yellow-50 min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-500">
          Guaranteed & Certified
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Online Learning Wherever And Whenever
        </h2>
        <p className="text-gray-600 mt-4 mx-10">
          We don’t just work with concrete and steel. We work with people. We
          are approachable, with even our highest work. We work with concrete
          and steel. We work with people.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <div className="feature">
          <img
            src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/course/course-1.png
"
            alt="Feature 1"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="feature">
          <img
            src="/path/to/image2.jpg"
            alt="Feature 2"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="feature">
          <img
            src="/path/to/image3.jpg"
            alt="Feature 3"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="feature">
          <img
            src="/path/to/image4.jpg"
            alt="Feature 4"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="feature">
          <img
            src="/path/to/image5.jpg"
            alt="Feature 5"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="flex flex-col items-center mb-10">
        <div className="bg-white p-4 rounded-full shadow-md mb-4">
          <img
            src="/path/to/certified.jpg"
            alt="Certified"
            className="w-20 h-20"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="certification-item p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg font-semibold">Top Instructors</p>
          </div>
          <div className="certification-item p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg font-semibold">3020 Online Courses</p>
          </div>
          <div className="certification-item p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg font-semibold">6000 Membership</p>
          </div>
          <div className="certification-item p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg font-semibold">Online Certifications</p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600">
          Find Out More
        </button>
      </div>
    </div>
  );
};

export default OnlineLearning;
