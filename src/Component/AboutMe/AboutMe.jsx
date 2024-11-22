import React, { useState } from "react";
import "../Comp.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AboutDetails from "./AboutDetails";

function ContactMe() {
  const [click, setClick] = useState(null);

  const handleClick = (getCurrentId) => {
    if (click === getCurrentId) {
      setClick(null);
      gsap.to(".text", {
        x: 0,
        duration: 1,
      });
    } else {
      setClick(getCurrentId);
      gsap.to(".text", {
        x: -400,
        duration: 1,
      });
      gsap.from(".details", {
        opacity: 0,
        y: -10,
        duration: 1,
      });
    }
  };

  const headings = [
    {
      id: "1",
      title: "Bio",
      detail:
        "Graduated from Pokhara University with a  Bachelor degree in Civil Engineering , where I developed strong problem-solving and analytical skills. However, my true passion lies in frontend development, and I am actively honing my skills in building dynamic and interactive web applications.",
    },
    {
      id: "2",
      title: "Skills",
      detail: "HTML, CSS, Javascript, React",
    },
    {
      id: "3",
      title: "Career",
      detail:
        "As of now, I do not have any experience and actively seeking for an internship",
    },
  ];

  return (
    <div className="about-box w-screen text-[#e9e8e8] flex justify-center items-center flex-col gap-5 font-serif">
      <div>
        {headings.map((heading) => (
          <div key={heading.id}>
            <h1
              className={`text text-7xl cursor-pointer ${
                click === heading.id ? "text-yellow-400" : ""
              }`}
              onClick={() => handleClick(heading.id)}
              style={{
                pointerEvents: click && click !== heading.id ? "none" : "auto",
              }}
            >
              {heading.title}
            </h1>

            <div
              className="details max-w-[400px] italic text-lg"
              style={{
                maxHeight: click === heading.id ? "50px" : "0",
                transition: "max-height 0.3s ease-out",
              }}
            >
              {click === heading.id ? <div>{heading.detail}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactMe;
