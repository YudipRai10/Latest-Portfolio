import React from "react";
import Hero from "./Hero";
import HomeAboutMe from "../Component/AboutMe/HomeAboutMe";
import HomeProjects from "./Projects/HomeProjects";

function Homepage() {
  return (
    <>
      <Hero />
      <HomeAboutMe />
      <HomeProjects />
    </>
  );
}

export default Homepage;
