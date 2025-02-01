import AnimatedContainer from "./AnimatedContainer";

export default function Projects() {
  return (
    <AnimatedContainer
      contentId={2}
      classes="gap-4 w-fit h-fit top-1/3 left-[40%]"
    >
      <div className="flex flex-col gap-6 items-center p-6 left-1/2">
        <h1 className="text-2xl font-extrabold flex items-center">
          🗃️ Projects
        </h1>

        <p>Coming Soon...</p>
      </div>
    </AnimatedContainer>
  );
}
