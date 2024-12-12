import React from "react";
import piano from "../../assets/images/piano_1.jpeg"

function Music({ scrollPosition }) {
    return (
        <section id="about" className="h-screen bg-gray-100 text-gray-800 py-16 flex items-center justify-center">
          <div className="flex items-center justify-between max-w-screen-xl w-full px-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2 px-5 mb-8 md:mb-0">
             <img 
                src= {piano} 
                alt="A placeholder image" 
                className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
    
            {/* Text Section */}
            <div className="w-1/2 ml-4">
                <h1 className="text-5xl font-semibold mb-5 text-gray-900">Sounds from the heart</h1>
                <p className="text-lg leading-relaxed mb-4">
                Injecting emotions and feelings into notes to make them into beautiful melodies 
                is something that appeals to me, and I play to relax myself too! 
                While certainly not a serious musician, I have attained grade 8 piano 
                and grade 5 theory, and can play the viola too!
                </p>
            </div>
          </div>
        </section>
      );
}

export default Music;
