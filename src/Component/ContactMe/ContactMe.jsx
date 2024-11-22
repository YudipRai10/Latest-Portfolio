import React, { useState } from "react";
import "../Comp.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import "./ContactMe.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ContactMe() {
  return (
    <div className="contact my-24 text-white flex flex-col items-center justify-center gap-[80px] mx-40">
      <div className="contact-title relative">
        <h1 className="px-7 text-7xl font-semibold">Get In Touch</h1>
        <img
          src={theme_pattern}
          alt="theme"
          className="z-[-1] absolute bottom-0 right-0"
        />
      </div>

      <div className="contact-section flex gap-36">
        <div className="contact-left flex flex-col gap-7">
          <h1 className="text-7xl font-bold">Let's Talk</h1>
          <p className="text-xl leading-6 anton-regular max-w-[550px]">
            I'm currently available to take on new projects, so feel free to
            message me about anything that you want me to work on. You can
            contact anytime
          </p>
          <div className="contact-details flex flex-col gap-7 text-[#D8D8D8] text-xl">
            <div className="contact-detail flex items-center gap-5">
              <img src={mail_icon} alt="email" />
              <p>Yudip11@gmail.com</p>
            </div>
            <div className="contact-detail flex items-center gap-5">
              <img src={location_icon} alt="location" />
              <p>Imadol, Lalitpur, Mahalaxmi, Ward 4</p>
            </div>
            <div className="contact-detail flex items-center gap-5">
              <img src={call_icon} alt="call" />
              <p>+977-9823991551</p>
            </div>
          </div>
        </div>
        <form className="contact-right flex flex-col items-start gap-7">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your Name..." name="name" />

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email..." name="email" />

          <label htmlFor="">Write your Message Here</label>
          <textarea
            className="w-[450px] border-none p-6 rounded-md bg-[#32323c] text-[#A0A0A0] text-xl"
            name="message"
            rows="8"
            placeholder="Enter your Message..."
          ></textarea>

          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
