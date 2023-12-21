import React from "react";
import { Link } from "react-router-dom";
import Stack from "../../components/Stack";

import projectData from "../../data/project.json";

export default function index() {
  const projects = projectData.projects;

  return (
      <div id="projects" className="w-[75%] lg:w-[50%] pt-24 absolute top-[590%] md:top-[370%] lg:top-[200%] lg:right-24" aria-label="Selected projects">
        <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
        </div>
        <div>
          <ul className="group/list">
            {projects.map((project, index) => (
              <li className="mb-12" key={index}>
                <div className="group relative grid gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="md:flex justify-between md:w-full z-10 sm:order-2 sm:col-span-6">
                    <img src={project.image} alt={project.project_name} className="w-44 h-24 mr-5 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30" />
                    <div className="pt-4 md:pt-0 pr-10">
                      <h3>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-lg md:text-xl"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Website Travel By Farhan"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            <span className="inline-block">
                              {project.project_name}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </h3>
                      {project.description.map((desc, index3) => (
                        <p className="mt-2 text-base md:text-lg leading-normal text-slate-400" key={index3}>
                          {desc}
                        </p>
                      ))}
                      <div className="flex flex-wrap">
                        {project.stack.map((stacks, index2) => (
                          <ul className="mt-2 flex">
                            <li className="mr-1.5 mt-2">
                              <Stack key={index2} children={stacks} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300" />
                            </li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link className="inline-flex items-center font-medium leading-tight text-slate-200 group" aria-label="View Full Project Archive" to="/archive">
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full Project </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
  );
}
