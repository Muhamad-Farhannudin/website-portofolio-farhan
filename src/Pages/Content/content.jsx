import React from "react";
import About from "../About";
import Experiences from "../Experience";
import Projects from "../Project";

import Fade from "react-reveal/Fade";

export default function content() {
  return (
    <>
      <About />
      <Experiences />
        <Projects />
    </>
  );
}
