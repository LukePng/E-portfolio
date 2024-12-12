import React from "react";
import homeImage from "../assets/images/home.jpg";
import scrollDown from "../assets/images/scroll_down_white.svg";

function Home({ scrollPosition }) {
  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about"); // Target section's id
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <section
      id="home"
      className="h-screen bg-gray-900 text-white flex items-center justify-center"
    >
      <div className="text-center">
        {/* Profile Image */}
        <img
          src={homeImage}
          className="rounded-full scale-125 h-40 rounded-full transition-transform duration-300 hover:scale-150 mx-auto m-10"
          alt="Profile"
        />
        {/* Welcome Text */}
        <h1 className="text-6xl font-bold mt-10">Welcome to My Portfolio</h1>
        <p className="mt-5 text-xl">Programmer | Student | Professional Clown</p>

        <div className="relative mt-10">
        {/* Scroll Down Image with onClick */}
        <div className="relative mt-8 w-fit mx-auto">
          {/* Scroll Down Image */}
          <img
            src={scrollDown}
            alt="Scroll Down"
            className="w-12 h-12 hover:cursor-pointer"
            onClick={scrollToNextSection}
          />
          {/* Text Relative to the Image */}
          <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-300 whitespace-nowrap">
            Scroll Down to Learn More
          </p>
        </div>
        </div>
        

      </div>
    </section>
  );
}

export default Home;
