import React, { useState } from "react";
import Stack from "../../components/Stack";

import archiveData from "../../data/archive.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LoadingAnimation from "../../components/Loading";
import Fade from "react-reveal/Fade";

export default function index() {
  const archives = archiveData.archives;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Fade bottom duration={2000}>
        <div className="bg-dark w-full p-7 md:p-24 mx-auto min-h-screen max-w-screen-xl">
          <Link className="pt-7 md:pt-0 group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
            </svg>
            Muhamad Farhannudin
          </Link>
          <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
          <table id="content" class="mt-12 w-full border-collapse text-left">
            <thead class="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
              <tr>
                <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
              </tr>
            </thead>
            <tbody>
              {archives.map((archive, index) => (
                <tr class="border-b border-slate-300/10 last:border-none" key={index}>
                  <td class="py-4 pr-4 align-top text-sm">
                    <div class="translate-y-px text-slate-400">{archive.year}</div>
                  </td>
                  <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                    <div>
                      <div class="block sm:hidden">
                        {archive.link.map((archive, index4) => (
                          <a
                            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300sm:hidden group/link text-base"
                            href={archive.link_href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={archive.name}
                            key={index4}
                          >
                            <span>
                              {" "}
                              <span class="inline-block">
                                {archive.name}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        ))}
                      </div>
                      <div class="hidden sm:block">{archive.project}</div>
                    </div>
                  </td>
                  <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                    <div class="translate-y-px whitespace-nowrap text-slate-400">{archive.made}</div>
                  </td>
                  <td class="hidden py-4 pr-4 align-top lg:table-cell w-1/3">
                    <div className="flex flex-wrap">
                      {archive.stack.map((built, index2) => (
                        <ul>
                          <li className="mr-1.5 mt-2">
                            <Stack key={index2} children={built} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300" />
                          </li>
                        </ul>
                      ))}
                    </div>
                  </td>
                  <td class="hidden py-4 align-top sm:table-cell">
                    <ul class="translate-y-1">
                      {archive.link.map((archive, index3) => (
                        <li class="mb-1 flex items-center" key={index3}>
                          <a
                            class="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 text-slate-400 focus-visible:text-teal-300 group/link text-sm"
                            href={archive.link_href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={archive.name}
                          >
                            <span>
                              {" "}
                              <span class="inline-block">
                                {archive.name}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                                  aria-hidden="true"
                                >
                                  <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </Fade>
      )}
    </>
  );
}
