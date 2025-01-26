"use client";
import { useObjectControls } from "@/store/controls";
import ControlsView from "./contents/ControlsView";
import AboutMe from "./contents/AboutMe";
import Contact from "./contents/Contact";
import Projects from "./contents/Projects";
import Skills from "./contents/Skills";
import StyledWrapper from "./contents/StyledWrapper";

export default function Overlay() {
  const ctx = useObjectControls();
  const content = !ctx || ctx.nearContent === null ? -1 : ctx.nearContent;
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <ControlsView />
      {content >= 0 && (
        <StyledWrapper>
          <section className="container">
            <div className="card-container">
              {content === 0 && <AboutMe />}
              {content === 1 && <Contact />}
              {content === 2 && <Projects />}
              {content === 3 && <Skills />}
            </div>
          </section>
        </StyledWrapper>
      )}
    </div>
  );
}
