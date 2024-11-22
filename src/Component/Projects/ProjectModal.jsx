import React from "react";

function ProjectModal({ project, handleClose }) {
  return (
    <div className="modal z-10 fixed pt-36 left-0 top-0 w-[100%] h-[100%] overflow-auto backdrop-blur-lg">
      <div className="content relative flex justify-center w-[100%] text-black">
        <div className="header relative flex justify-center w-[420px] bg-slate-100 border-2 rounded-xl">
          <span
            className="close-modal-icon absolute top-0 right-2 cursor-pointer text-2xl text-black font-extrabold hover:text-red-500"
            onClick={handleClose}
          >
            &times;
          </span>
          <div className="py-10 px-5 flex flex-col items-center">
            <img
              src={project.image}
              alt="image"
              className="w-[350px] h-[250px] object-cover"
            />
            <h2 className="mt-5 font-bold italic text-3xl">{project.title}</h2>
            <h4>{project.subTitle}</h4>
            <a
              className="mt-2 text-xl font-semibold px-5 rounded-xl transition-[0.3s] hover:bg-black hover:text-white"
              href={project.github}
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="mt-2 text-xl font-semibold px-5 rounded-xl transition-[0.3s] hover:bg-black hover:text-white"
              href={project.vercel}
              target="_blank"
            >
              Vercel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
