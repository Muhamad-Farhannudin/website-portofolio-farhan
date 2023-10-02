import React from "react";
import Stack from "../../components/Stack";
import Fade from "react-reveal/Fade";

import experiencesData from "../../data/experience.json";

export default function index() {
  const experiences = experiencesData.experiences;
  return (
    <Fade right duration={2000} delay={1000}>
      <div id="experience" className="w-[75%] lg:w-[50%] pt-24 absolute top-[300%] md:top-[90%] lg:right-24" aria-label="Work experience">
        <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
        </div>
        <div>
          <ol className="group/list">
            {experiences.map((experience, index) => (
              <li className="mb-12" key={index}>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">
                    {experience.entry_years}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base cursor-pointer"
                          rel="noreferrer"
                          aria-label="Lead Engineer at Upstatement"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span className="text-xl">
                            {experience.company_name}{" "}
                            <span className="inline-block">
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
                      </div>
                      <div>
                        <div className="text-slate-500" aria-hidden="true">
                          {experience.title}
                        </div>
                      </div>
                    </h3>

                    {experience.positions.map((position, index1) => (
                      <div key={index1} className="mt-4">
                        <h4 className="font-medium text-teal-500">{position.position}</h4>
                        <p className="text-gray-300">{position.entry_year}</p>
                        {position.description.map((desc, index2) => (
                          <p key={index2} className="mt-2 text-sm leading-normal text-slate-400">
                            {desc}
                          </p>
                        ))}
                        <div className="flex flex-wrap lg:flex-nowrap">
                          {position.stack.map((stacks, index3) => (
                            <ul className="mt-2 flex">
                              <li className="mr-1.5 mt-2">
                                <Stack key={index3} children={stacks} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300" />
                              </li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <a className="inline-flex items-center leading-tight font-semibold text-slate-200 group" aria-label="View Full Résumé" href="CV_Muhamad Farhannudin FIXS.pdf">
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">CV Resume</span>
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
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}
