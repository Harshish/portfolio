import Image from "next/image";

export default function Overlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Image
        className="absolute bottom-0 left-28 translate-x-[-50%] translate-y-[-50%]"
        src="portfolio/Controls.png"
        alt="logo"
        width="150"
        height="150"
      />
    </div>
  );
}
