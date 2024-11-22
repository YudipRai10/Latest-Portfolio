import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function HomeAboutMe() {
  const aboutMeRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    const textElement = aboutMeRef.current;
    const text = textElement.textContent;
    textElement.innerHTML = text
      .split("")
      .map(
        (letter) => `<span class="letter inline-block mr-1">${letter}</span>`
      )
      .join("");

    gsap.fromTo(
      textElement.querySelectorAll(".letter"),
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: textElement,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const text = aboutTextRef.current;
    const words = text.innerText.split(" "); // Split by spaces using innerText
    text.innerHTML = ""; // Clear the existing content

    // Wrap words in span and append to the text
    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerText = word + " "; // Add space after each word
      text.appendChild(span);
    });

    gsap.from(text.querySelectorAll("span"), {
      opacity: 0.2,
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: text,
        scrub: true,
        start: "top 70%",
        end: "bottom 50%",
      },
    });
  }, []);

  useEffect(() => {
    gsap.to("#about", {
      opacity: 1,
      y: -100,
      scrollTrigger: {
        trigger: "#about",
        scrub: true,
        start: "top 85%",
        end: "bottom 50%",
      },
    });
  });

  return (
    <div>
      <div className="text-white p-8 mt-16 flex">
        <div
          ref={aboutMeRef}
          className="aboutme border-white text-white reenie-beanie-regular text-[100px] p-10"
        >
          About me.
        </div>
        <div
          ref={aboutTextRef}
          className="abouttext text-yellow-500 line flex-1 anton-regular text-6xl pt-44 px-5 mb-32"
        >
          Burning with passion and creativity, I love to explore more in the
          world of frontend development. With a keen eye for design and a love
          for seamless user experiences, I transform ideas into dynamic,
          engaging web applications. Always ready to learn more and keep
          improving myself.
        </div>
      </div>

      <div className="flex justify-center">
        <button
          id="about"
          className="bg-red-600 text-white px-10 py-2 text-2xl rounded-2xl dancing-script-cursive opacity-0 hover:bg-red-500"
        >
          <Link to={"/about"}>About Me</Link>
        </button>
      </div>
    </div>
  );
}

export default HomeAboutMe;
