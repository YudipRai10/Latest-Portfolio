import React, { useEffect } from "react";
import { projectData } from "../../Data/ProjectData";

function ProjectCards() {
  const displayedProjects = projectData.slice(0, 3);
  return (
    <div id="projects" className="text-white mt-24 flex justify-center">
      <div className="flex gap-10 border-white">
        {displayedProjects.map((data) => (
          <div
            key={data.id}
            className="bg-white text-black border p-5 flex flex-col items-center cursor-pointer"
          >
            <img
              src={data.image}
              alt="thumbnail"
              className="w-64 h-52 object-cover"
            />
            <h1 className="mt-5 font-serif text-xl">{data.title}</h1>
            <a
              href={data.vercel}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-5 py-1 mt-3 rounded-2xl font-semibold hover:bg-black hover:text-white hover:border-none"
            >
              Vercel
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-3 py-1 mt-1 rounded-2xl font-semibold hover:bg-black hover:text-white hover:border-none"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;
