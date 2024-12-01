import React from "react";

const OnlineLearning = () => {
  return (
    <div className="bg-[#FFFBEA] p-10 lg:p-16 min-h-screen">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/course/course-1.png"
            alt="Learning"
            className="w-svw rounded-lg shadow-lg"
          />
          <img
            src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/course/course-2.png"
            alt="Learning"
            className="w-full rounded-lg shadow-lg"
          />
          <img
            src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/course/course-3.png"
            alt="Learning"
            className="w-full rounded-lg shadow-lg"
          />
          {/* <img
            src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/course/course-4.png"
            alt="Learning"
            className="w-full rounded-lg shadow-lg"
          /> */}
        </div>

        {/* Text Section */}
        <div>
          <p className="text-orange-500 font-bold text-xl mb-2">
            ✨ Guaranteed & Certified
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Online Learning <br />
            <span className="text-green-600">Wherever And Whenever</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            We don’t just work with concrete and steel. We work with people. We
            are approachable, with even our highest work. We work with concrete
            and steel. We work with people.
          </p>

          {/* Certifications */}
          <div className="mt-5 flex flex-wrap gap-4">
            <div className="flex items-center">
              <img
                src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/test-user-1.png"
                alt="Certified"
                className="w-10 h-10 rounded-full border-2 border-green-600"
              />
              <span className="ml-2 text-gray-800 font-semibold">
                Top Instructors
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/test-user-2.png"
                alt="Certified"
                className="w-10 h-10 rounded-full border-2 border-green-600"
              />
              <span className="ml-2 text-gray-800 font-semibold">
                3020 Online Courses
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/user/test-user-3.png"
                alt="Certified"
                className="w-10 h-10 rounded-full border-2 border-green-600"
              />
              <span className="ml-2 text-gray-800 font-semibold">
                6000 Membership
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://uiparadox.co.uk/public/templates/future-hub/assets/media/course/course-4.png"
                alt="Certified"
                className="w-10 h-10 rounded-full border-2 border-green-600"
              />
              <span className="ml-2 text-gray-800 font-semibold">
                Online Certifications
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Button */}
      <div className="mt-5 text-center">
        <button className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-700">
          Find Out More
        </button>
      </div>
    </div>
  );
};

export default OnlineLearning;
