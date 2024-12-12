import React from "react";

function Achievements() {
  const projects = [
    { id: 1, title: "Project One", description: "Description of Project One" },
    { id: 2, title: "Project Two", description: "Description of Project Two" },
    { id: 3, title: "Project Three", description: "Description of Project Three" },
  ];

  return (
    <section id="achievements" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">My Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
