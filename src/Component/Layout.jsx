import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import menu_icon from "../assets/menu_icon.png";
import cart_cross_icon from "../assets/cart_cross_icon.png";
import gsap from "gsap";
import "./Comp.css";
import Footer from "../Component/Footer/Footer";

function Layout() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const timeline = gsap.timeline();

  // useGSAP(() => {
  //   timeline.from("#titleName", {
  //     opacity: 0,
  //     y: -100,
  //     duration: 0.7,
  //   });
  //   timeline.from(".midText", {
  //     opacity: 0,
  //     y: -100,
  //     duration: 0.5,
  //     stagger: 0.2,
  //   });
  //   timeline.from("#glow-button", {
  //     x: -50,
  //   });
  // }, []);
  return (
    <>
      <div className="sm:fixed top-0 left-0 right-0 sm:z-50 p-1 bg-black">
        <div className="flex items-center justify-between p-2 py-5 px-10 text-white">
          {/* Left-side Logo */}
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <div>
                <p
                  className="italic text-white font-bold text-xl opacity-1 sm:text-3xl"
                  id="titleName"
                >
                  Yudip Rai
                </p>
              </div>
            </div>
          </Link>

          {/* Middle Ul */}
          <div>
            <ul className="hidden sm:flex gap-5 text-sm text-grat-700">
              <NavLink
                to={"/about"}
                className="flex flex-col items-center gap-1"
              >
                <p className="hover:scale-110 text-xl font-serif midText">
                  ABOUT
                </p>
                <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
              </NavLink>
              <NavLink
                to={"/projects"}
                className="flex flex-col items-center gap-1"
              >
                <p className="hover:scale-110 text-xl font-serif midText">
                  PROJECTS
                </p>
                <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
              </NavLink>
            </ul>
          </div>

          {/* Right-side Icons */}
          <div className="flex items-center gap-6">
            <Link to={"/contactme"}>
              <div
                id="glow-button"
                className="relative bg-white text-white text-xl font-normal px-3 py-1 hover:bg-[#ff1867] hover:text-[#ff1867]"
              >
                <span>Contact Me</span>
                <i></i>
              </div>
            </Link>
            {/* Menu button */}
            <img
              src={menu_icon}
              alt="menu-icon"
              className="w-5 cursor-pointer sm:hidden"
              onClick={() => setVisible(true)}
            />
          </div>

          {/* SideBar */}
          <div
            className={`absolute top-0 bottom-0 right-0 bg-white transition-all z-50 ${
              visible ? "w-full" : "w-0"
            }`}
          >
            <div className="flex flex-col text-gray-600">
              <div
                className="p-3 cursor-pointer"
                onClick={() => setVisible(false)}
              >
                <img
                  src={cart_cross_icon}
                  alt="cross-icon"
                  className="h-4 hover:scale-110"
                />
              </div>
              <NavLink
                to={"/"}
                className="py-2 pl-6 border italic font-medium bg-white"
                onClick={() => setVisible(false)}
              >
                HOME
              </NavLink>
              <NavLink
                to={"/about"}
                className="py-2 pl-6 border italic font-medium bg-white"
                onClick={() => setVisible(false)}
              >
                ABOUT
              </NavLink>
              <NavLink
                to={"/projects"}
                className="py-2 pl-6 border italic font-medium bg-white"
                onClick={() => setVisible(false)}
              >
                PROJECTS
              </NavLink>
              <NavLink
                to={"/contactme"}
                className="py-2 pl-6 border italic font-medium bg-white"
                onClick={() => setVisible(false)}
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
