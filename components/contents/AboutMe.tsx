import Image from "next/image";
import AnimatedContainer from "./AnimatedContainer";

export default function AboutMe() {
  return (
    <AnimatedContainer
      contentId={0}
      classes="gap-4 w-1/2 h-fit top-9 lg:top-1/4 left-1/3 lg:left-1/4 min-w-60"
    >
      <div className="flex flex-col gap-6 items-center p-6">
        <h1 className="text-2xl font-extrabold flex items-center">
          💫 About Me
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-4">
          <Image src="images/pote.jpg" alt="Profile" width={200} height={200} />

          <div className="text-white text-lg leading-relaxed max-h-80 sm:max-h-80 overflow-auto">
            <p>
              I&apos;m a relentless tinkerer 🛠️ and a <b>tech enthusiast</b> 🤓
              at heart, always eager to dive into new challenges 🎢. As a
              <b> Software Engineer</b> 💻, I&apos;ve explored everything from
              the intricate world of <b>networking switch software</b> 🔌🔄 to
              crafting
              <b> dynamic full-stack web applications</b> 🌐🎨. Whether
              it&apos;s low-level system optimization ⚙️🧐 or building{" "}
              <b>seamless user experiences</b> ✨🖥️, I love pushing the
              boundaries 🚀 of what&apos;s possible in tech.
            </p>
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
}
