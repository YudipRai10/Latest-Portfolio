import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AboutMe from "./AboutMe";
import "../Comp.css";
function About() {
  const [displayText, setDisplayText] = useState(false);
  useGSAP(() => {
    gsap.from(".whoami", {
      opacity: 0,
      x: -200,
      duration: 1.3,
    });
    gsap.from("#learn", {
      opacity: 0,
      x: 100,
      duration: 1.3,
    });
  }, []);

  return (
    <div
      className={`text-white pt-10 sm:pt-16 h-screen w-screen flex justify-center`}
    >
      <div
        className={`flex flex-col justify-center items-center w-full p-20 ${
          displayText ? "hidden" : "block"
        }`}
      >
        <h1 className="whoami text-8xl archivo-black-regular text-yellow-400 lobster-regular">
          Yudip Rai
        </h1>
        <h4 className="whoami mt-5 dancing-script-cursive text-2xl">
          Frontend Developer
        </h4>
        <button
          id="learn"
          className="border border-black px-8 py-2 mt-2 text-lg hover:bg-white hover:text-black"
          onClick={() => setDisplayText(true)}
        >
          About Me
        </button>
      </div>

      {displayText ? <AboutMe /> : null}
    </div>
  );
}

export default About;
