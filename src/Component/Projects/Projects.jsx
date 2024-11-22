import React, { useState } from "react";
import { projectData } from "../../Data/ProjectData";
import "../Comp.css";
import "./Project.css";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [showProjectPopup, setShowProjectPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTogglePopup = (project) => {
    setSelectedProject(project);
    setShowProjectPopup(!showProjectPopup);
  };

  const handleClose = () => {
    setShowProjectPopup(false);
  };
  return (
    <div className="myproject flex flex-col items-center justify-center gap-20 mx-32 my-28 text-white">
      <div className="myproject-title">
        <h1 className="px-7 text-7xl font-semibold ga-maamli-regular">
          My Projects
        </h1>
      </div>
      <div className="myproject-container">
        {projectData?.map((item) => {
          return (
            <img
              key={item.id}
              src={item.image}
              alt="thumbnail"
              className="w-72 h-52 object-cover rounded-2xl"
              onClick={() => handleTogglePopup(item)}
            />
          );
        })}
      </div>
      {showProjectPopup && selectedProject && (
        <ProjectModal handleClose={handleClose} project={selectedProject} />
      )}
    </div>
  );
}

export default Projects;
