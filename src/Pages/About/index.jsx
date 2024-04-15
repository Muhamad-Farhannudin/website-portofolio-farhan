import React from "react";
import Fade from "react-reveal/Fade";

export default function index() {
  return (
    <Fade bottom duration={1000}>
      <div id="about" className="w-[80%] lg:w-[50%] pr-20 pt-24 lg:-mt-24 absolute lg:right-24 text-base md:text-lg text-[#94a3b8]">
        <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
        </div>
        <p className="mb-4 mx-4">
          Welcome to my Portfolio Website, Let me introduce myself, my name is{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer" target="_blank" rel="noreferrer">
            Muhammad Farhannudin,
          </a>{" "}
          I am a student at one of the{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer" target="_blank" rel="noreferrer">
            Universitas Nasional Pasim Bandung,
          </a>{" "}
          majoring in Informatics Engineering, I am currently in <span className="block">my 8th semester.</span>{" "}
        </p>

        <p className="mb-4 mx-4">
          My expertise is as a{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer" target="_blank" rel="noreferrer">
            FrontEnd Developer,
          </a>{" "}
          creating a website using{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer" target="_blank" rel="noreferrer">
            ReactJs,
          </a>{" "}
          creating a website using{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer" target="_blank" rel="noreferrer">
            Fullstack Javascript,
          </a>{" "}
          using Express Js. I have created several Fullstack projects, from Bootcamp, online training, and self-study via YouTube.
        </p>

        <p className="mb-4 mx-4">
          Currently I have been working in the online shop sector for 5 years and 9 months, starting from managing Fanspage Facebook, researching products, creating websites with{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer" target="_blank" rel="noreferrer">
            Elementor,
          </a>{" "}
          managing Shopee and Lazada marketplaces, and advertising using{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer" target="_blank" rel="noreferrer">
            Facebook Ads
          </a>{" "}
          and{" "}
          <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer" target="_blank" rel="noreferrer">
            Titok Ads.
          </a>
        </p>
      </div>
    </Fade>
  );
}
