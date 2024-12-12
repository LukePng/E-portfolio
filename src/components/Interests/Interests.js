import React from "react";

function Interests({ scrollPosition }) {
  return (
    <section id="home" className="h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mt-10">My insterests</h1>
        <p>↓↓</p>
      </div>
    </section>
  );
}

export default Interests;
