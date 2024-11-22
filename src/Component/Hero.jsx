import React from "react";
import ppimage from "../assets/profilepic.jpg";
import "./Comp.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  useGSAP(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      x: -200,
      duration: 1.2,
      stagger: 0.2,
    });
    gsap.from(".hero-text2", {
      opacity: 0,
      x: 200,
      duration: 1.2,
      stagger: 0.2,
    });
    gsap.from(".photo", {
      opacity: 0,
      x: 200,
      duration: 1.2,
    });
  }, []);
  return (
    <main className="text-white mt-32 sm:flex">
      <div className="flex-1 p-5 sm:pl-36">
        <div className="hero-text text-7xl text-center py-7 bg-yellow-400 archivo-black-regular">
          Hello
        </div>
        <div className="hero-text2 text-2xl text-center py-7 bg-red-500">
          I am <span className="font-serif italic text-5xl">Yudip Rai</span>
        </div>
        <div className="hero-text text-4xl text-center py-7 bg-blue-500 ">
          <div className="dancing-script-cursive">
            Frontend Developer.{" "}
            <div className="font-serif italic text-base mt-4">
              An up-and-coming Frontend Developer with burning passion to learn
              more.
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-5">
        <img
          src={ppimage}
          alt="profile-photo"
          className="rounded-full sm:w-[270px] photo"
        />
      </div>
    </main>
  );
}

export default Hero;
