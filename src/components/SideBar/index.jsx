import axios from "axios";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

import AboutData from "../../data/about.json";

export default function index() {
  const abouts = AboutData.about;

  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isExperienceActive, setIsExperienceActive] = useState(false);
  const [isProjectActive, setIsProjectActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const experiencesSection = document.getElementById("experience");
      const projectSection = document.getElementById("projects");
      if (aboutSection) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        const aboutSectionTop = aboutSection.offsetTop;
        const aboutSectionBottom = aboutSectionTop + aboutSection.offsetHeight;

        setIsAboutActive(scrollTop >= aboutSectionTop && scrollTop < aboutSectionBottom);
      }

      if (experiencesSection) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        const experiencesSectionTop = experiencesSection.offsetTop;
        const experiencesSectionBottom = experiencesSectionTop + experiencesSection.offsetHeight;

        setIsExperienceActive(scrollTop >= experiencesSectionTop && scrollTop < experiencesSectionBottom);
      }

      if (projectSection) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        const projectSectionTop = projectSection.offsetTop;
        const projectSectionBottom = projectSectionTop + projectSection.offsetHeight;

        setIsProjectActive(scrollTop >= projectSectionTop && scrollTop < projectSectionBottom);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Periksa posisi gulir awal

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      // Sesuaikan posisi gulir untuk pas dengan bagian
      window.scrollTo({
        top: aboutSection.offsetTop - 100, // Sesuaikan nilai ini sesuai kebutuhan
        behavior: "smooth",
      });
    }
  };

  const handleExperience = () => {
    const experiencesSection = document.getElementById("experience");
    if (experiencesSection) {
      // Sesuaikan posisi gulir untuk pas dengan bagian
      window.scrollTo({
        top: experiencesSection.offsetTop - -5, // Sesuaikan nilai ini sesuai kebutuhan
        behavior: "smooth",
      });
    }
  };

  const handleProject = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      // Sesuaikan posisi gulir untuk pas dengan bagian
      window.scrollTo({
        top: projectSection.offsetTop - -5, // Sesuaikan nilai ini sesuai kebutuhan
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade left>
      <div className="w-full md:w-1/2 lg:fixed">
        {abouts.map((about, index) => (
          <div className="inter" key={index}>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 ">{about.name}</h1>
            <h2 className="mt-3 md:text-lg font-bold tracking-tight text-slate-200">{about.title}</h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">{about.skills}</p>
          </div>
        ))}

        <nav className="mt-10 hidden lg:block">
          <ul className="w-1/2">
            <li>
              <a className={`group cursor-pointer flex items-center py-3 ${isAboutActive ? "active" : ""}`} onClick={handleAboutClick}>
                <span
                  className={`nav-indicator mr-4 h-px w-8 ${
                    isAboutActive ? "bg-slate-200 w-[65px]" : "bg-slate-600 w-16"
                  } transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest ${isAboutActive ? "text-slate-200" : "text-slate-500"} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>About</span>
              </a>
            </li>
            <li>
              <a className={`group cursor-pointer flex items-center py-3 ${isExperienceActive ? "active" : ""}`} onClick={handleExperience}>
                <span
                  className={`nav-indicator mr-4 h-px w-8 ${
                    isExperienceActive ? "bg-slate-200 w-[65px] scroll-mt-5" : "bg-slate-600"
                  } transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest ${isExperienceActive ? "text-slate-200" : "text-slate-500"} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>Experience</span>
              </a>
            </li>
            <li>
              <a className={`group cursor-pointer flex items-center py-3 ${isProjectActive ? "active" : ""}`} onClick={handleProject}>
                <span
                  className={`nav-indicator mr-4 h-px w-8 ${
                    isProjectActive ? "bg-slate-200 w-[65px] scroll-mt-5" : "bg-slate-600"
                  } transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest ${isProjectActive ? "text-slate-200" : "text-slate-500"} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>Projects</span>
              </a>
            </li>
          </ul>
        </nav>

        <ul className="ml-1 mt-8 flex items-center text-slate-400" aria-label="Social media">
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200 ease-in-out" href="https://github.com/Muhamad-Farhannudin" target="_blank" rel="noreferrer">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://www.instagram.com/m_farhan2908/" target="_blank" rel="noreferrer">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" title="farhanutama2908@gmail.com" href="mailto:farhanutama2908@gmail.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Gmail</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" className="h-11 w-8" aria-hidden="true">
                <path
                  id="white_background"
                  d="M55,10H9c-2.209,0-4,1.791-4,4v34c0,2.209,1.791,4,4,4h46c2.209,0,4-1.791,4-4V14C59,11.791,57.209,10,55,10z M55,45.738 C54.954,47,53.901,48,52.618,48H49.5L51,21L32,33L13,22l1.5,26h-3.118C10.099,48,9.046,47,9,45.738V16.289 c0-1.25,1.03-2.263,2.3-2.263h1.2L32,29l19.5-14.974h1.2c1.27,0,2.3,1.013,2.3,2.263V45.738z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="https://linkedin.com/in/mfarhannudin/" target="_blank" rel="noreferrer">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </Fade>
  );
}
