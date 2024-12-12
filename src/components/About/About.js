import React from "react";

function About({ scrollPosition }) {
  return (
    <section id="about" className="h-screen bg-gray-100 text-gray-800 py-16 flex items-center justify-center">
      <div className="flex items-center justify-between max-w-screen-xl w-full px-8">
        {/* Text Section */}
        <div className="w-1/2 text-left px-5">
          <h2 className="text-4xl font-semibold mb-5 text-gray-900">About Myself</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi Everyone! I am Luke, currently a year 12 student studying in Hwa Chong Institution.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            I have a deep passion for programming related topics and have worked on various projects, which I will share more about later!
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Being a student at heart, I have a craving to constantly learn more new skills!
          </p>

          <p className="text-lg leading-relaxed mb-4">
            My dream is to eventually pursue a career in the Finance/Economics sector!
          </p>
        </div>

        {/* Image Section */}
        <div className="w-1/2">
          <img 
            src="https://via.placeholder.com/400" 
            alt="A placeholder image" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;