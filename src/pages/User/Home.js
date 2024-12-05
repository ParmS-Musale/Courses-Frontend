import React, { useRef,useEffect} from "react";
import Navbar from "../../components/Navbar";
import HeroBanner from "./HeroBanner";
import Features from "./Features";
import Footer from "../../components/Footer";
import About from "./About";
import CourseList from "./CourseList";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  // Create refs for each section

  const homeRef =     useRef(null);
  const coursesRef =  useRef(null);
  const aboutRef =    useRef(null);
  const featuresRef = useRef(null);
  const contactRef =  useRef(null);
  const testoRef =    useRef(null);

  console.log(homeRef)
  console.log(coursesRef)
  console.log(aboutRef)


  useEffect(()=>{
    
  },[homeRef])
  
  return (
    <div>
      {/* Pass refs to Navbar */}
      <Navbar
        refs={{
          homeRef,
          coursesRef,
          aboutRef,
          featuresRef,
          contactRef,
          testoRef,
        }}
      />

      {/* Sections */}
      <div ref={homeRef}>
        <HeroBanner />
      </div>
      {/* <div ref={coursesRef}>
        <OnlineLearning />
      </div> */}
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={coursesRef}>
        <CourseList />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={testoRef}>
        <Testimonials />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
