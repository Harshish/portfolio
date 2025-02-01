"use client";
import AboutMe from "@/components/contents/AboutMe";
import Contact from "@/components/contents/Contact";
import Projects from "@/components/contents/Projects";
import Skills from "@/components/contents/Skills";
import Loading from "@/components/Loading";
import Overlay from "@/components/Overlay";
import Scene from "@/components/Scene";
import { ControlsContextProvider } from "@/store/controls";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <ControlsContextProvider>
        <div className="h-screen w-screen">
          <Scene />
          <Overlay />
          <AboutMe />
          <Contact />
          <Skills />
          <Projects />
        </div>
      </ControlsContextProvider>
    </Suspense>
  );
}
