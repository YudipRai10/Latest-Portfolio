import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../Comp.css";
import ProjectCards from "./ProjectCards";
import { Link } from "react-router-dom";

function HomeProjects() {
  useGSAP(() => {
    gsap.from("#move", {
      opacity: 0,
      duration: 1.5,
      y: 100,
      scrollTrigger: {
        trigger: "#move",
        scrub: true,
      },
    });
    const marquee = document.querySelector(".marquee-wrapper");
    const totalWidth = marquee.scrollWidth;

    // Animate the marquee
    gsap.to(marquee, {
      x: -totalWidth / 2,
      duration: 10, // Adjust duration for speed
      ease: "linear",
      repeat: -1, // Repeat infinitely
    });
  }, []);

  return (
    <div className="h-screen">
      <div id="move" className="mt-16 flex overflow-hidden">
        <div className="marquee-wrapper flex">
          {/* First Set of Projects */}
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="marque flex-shrink-0 bg-[#d8ff04] flex items-center gap-10 py-3"
            >
              <h1 className="lobster-regular text-5xl text-gray-950 pl-10">
                My Projects
              </h1>
              <img
                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                className="w-10"
                alt=""
              />
            </div>
          ))}
          {/* Duplicate Set for Infinite Effect */}
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index + 5}
              className="marque flex-shrink-0 bg-[#d8ff04] flex items-center gap-10 py-3"
            >
              <h1 className="lobster-regular text-5xl text-gray-950 pl-10">
                My Projects
              </h1>
              <img
                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                className="w-10"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <ProjectCards />
      </div>

      <div className="flex justify-center mt-16">
        <Link to={"/projects"}>
          <button className=" bg-red-500 text-white text-xl px-10 py-2 rounded-3xl font-bold hover:bg-red-400">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeProjects;
