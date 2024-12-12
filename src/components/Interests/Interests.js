import React from "react";
import scrollDown from "../../assets/images/scroll_down_black.svg";

function Interests({ scrollPosition }) {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("photo"); // Target section's id
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <section id="home" className="h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mt-10">My interests</h1>
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
          <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-600 whitespace-nowrap">
            Scroll Down to Learn More
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Interests;
