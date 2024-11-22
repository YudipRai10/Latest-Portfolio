import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Layout from "./Layout";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import About from "./AboutMe/About";
import ScrollToTop from "./ScrollToTop";

function RouteProvider() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contactme" element={<ContactMe />}></Route>
            <Route path="about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouteProvider;
