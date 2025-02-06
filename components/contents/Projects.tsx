import Image from "next/image";
import AnimatedContainer from "./AnimatedContainer";
import Link from "next/link";

export default function Projects() {
  return (
    <AnimatedContainer
      contentId={2}
      classes="gap-4 w-1/2 h-fit top-9 lg:top-1/4 left-1/3 lg:left-1/4 min-w-60"
    >
      <div className="flex flex-col gap-6 items-center p-6 left-1/2">
        <h1 className="text-2xl font-extrabold flex items-center">
          🗃️ Projects
        </h1>

        <div className="flex flex-col items-center w-full gap-4 max-h-80 sm:max-h-80 overflow-auto">
          {/* Football Manager */}
          <Link
            href="https://github.com/Harshish/football-manager"
            target="_blank"
            className="w-full"
          >
            <article className="flex flex-col lg:flex-row items-center bg-gray-700 justify-start p-4 gap-4 shadow-lg rounded-xl">
              <Image
                src="images/FM.png"
                alt="footballmanagerlogo"
                width={100}
                height={100}
                className="rounded-full hover:scale-110 transition-transform w-full lg:w-1/4"
              />
              <div className="flex flex-col gap-2 w-full lg:w-3/4">
                <p className="text-sm">
                  This project provides a responsive dashboard for viewing
                  player stats. Built using Python Flask as backend and React
                  for front end.
                </p>
                <h3 className="font-bold text-sm">
                  Tech Stack:
                  <span className="ml-1 font-medium">
                    Python · Flask · React.js · HTML5 · JavaScript · CSS
                  </span>
                </h3>
              </div>
            </article>
          </Link>

          {/* Catwalk 21 Salon */}
          <Link
            href="https://catwalk21salon.com/"
            target="_blank"
            className="w-full"
          >
            <article className="flex flex-col lg:flex-row items-center bg-gray-700 justify-start p-4 gap-4 shadow-lg rounded-xl">
              <Image
                src="images/C21.png"
                alt="catwalk21logo"
                width={200}
                height={200}
                className="rounded-full hover:scale-110 transition-transform w-full lg:w-1/4"
              />
              <div className="flex flex-col gap-2 w-full lg:w-3/4">
                <p className="text-sm">
                  This is an online website built for a salon using jQuery, HTML
                  and CSS.
                </p>
                <h3 className="font-bold text-sm">
                  Tech Stack:
                  <span className="ml-1 font-medium">
                    Bootstrap · HTML5 · jQuery · JavaScript · CSS
                  </span>
                </h3>
              </div>
            </article>
          </Link>
        </div>
      </div>
    </AnimatedContainer>
  );
}
