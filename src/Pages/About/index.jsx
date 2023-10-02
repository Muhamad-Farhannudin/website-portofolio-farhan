import React from "react";
import Fade from "react-reveal/Fade";

export default function index() {
  return (
    <Fade bottom duration={1000}>
      <div id="about" className="w-[80%] lg:w-[50%] pr-20 pt-24 lg:-mt-24 absolute lg:right-24 text-base md:text-lg text-[#94a3b8]">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
        <p className="mb-4">
          Welcome to my portfolio page! I am a 6th-semester Computer Engineering student, with a focus and expertise as a{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">
            Frontend Developer.
          </a>{" "}
          I have a strong interest and passion for creating engaging and accessible web experiences.
        </p>

        <p className="mb-4 pr-">
          Throughout my academic and professional journey, I have gained valuable experience in developing websites using cutting-edge technologies like{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">
            ReactJs.
          </a>{" "}
          My ability to translate complex designs from Figma into functional code enables me to create attractive and{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">
            user-friendly interfaces.
          </a>
        </p>

        <p className="mb-4">
          Additionally, I have been involved in projects involving technologies such as MongoDB, ExpressJs, and NodeJs. Opening opportunities for me to develop skills as a{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">
            Fullstack Developer.
          </a>{" "}
          I have been working in the online shop industry for 5 years, and this experience has solidified my determination to pursue my dream of becoming a proficient programmer.
        </p>

        <p className="mb-4">
          I am very enthusiastic and committed to continuous learning and growth in the software development world. My goal is to become a{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">
            Fullstack Developer
          </a>{" "}
          who can make a positive impact through technology. Thank you for visiting my portfolio page, and I look forward to collaborating with you on future projects!
        </p>
      </div>
    </Fade>
  );
}
