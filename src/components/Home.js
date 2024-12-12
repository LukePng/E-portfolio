import React from "react";
import homeImage from "../assets/home.jpg";

function Home({ scrollPosition }) {
  return (
    <section id="home" className="h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <img src={homeImage} className="rounded-full scale-125 h-40 rounded-full transition-transform duration-300 hover:scale-150 mx-auto m-10" alt="" />
        <h1 className="text-5xl font-bold mt-10">Welcome to My Portfolio</h1>
        <p className="mt-3 text-sm">Programmer | Student | Professional Clown</p>
        <p className="mt-4 text-xl">Scroll Down To Learn more about me!</p>
        <p>↓↓</p>
      </div>
    </section>
  );
}

export default Home;
