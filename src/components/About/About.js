import React from "react";
import about_pic from "../../assets/images/abouts.jpeg"

function About({ scrollPosition }) {
  return (
    <section id="about" className="h-screen bg-gray-100 text-gray-800 py-16 flex items-center justify-center">
      <div className="flex items-center justify-between max-w-screen-xl w-full px-8">
        {/* Text Section */}
        <div className="w-1/2 text-right px-12">
          <h1 className="text-6xl font-semibold mb-5 text-gray-900">About Myself</h1>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            Hi Everyone! I am Luke, currently a year 12 student studying in Singapore's Hwa Chong Institution! 
            I am deeply passionate about programming related 
            topics and have worked on various projects, which I will share more about later!!!
            Being a student at<span className="block text-right">heart, I have a craving to constantly learn more new skills!</span>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-1/2">
          <img 
            src={ about_pic } 
            alt="A placeholder image" 
            className="w-full h-auto max-h-[500px] object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;