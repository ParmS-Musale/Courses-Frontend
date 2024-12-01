import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HeroBanner from "./HeroBanner";
import OnlineLearning from "./OnlineLearning ";
import Features from "./Features";
import Footer from "../../components/Footer";
import About from "./About";
import CourseList from "./CourseList";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
        <HeroBanner />
        <OnlineLearning />
        <Features />
        <About />
        <CourseList />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Home;
