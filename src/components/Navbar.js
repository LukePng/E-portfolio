import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-3">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#interests" className="hover:underline">Interests</a></li>
          <li><a href="#achievements" className="hover:underline">Achievements</a></li>
          <li><a href="#experiences" className="hover:underline">Experiences</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
