"use client";
import Image from "next/image";
import ButtonControls from "../ButtonControls";

export default function ControlsView() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <Image
        className="absolute bottom-0 left-28 translate-x-[-50%] translate-y-[-50%]"
        src="images/Controls.png"
        alt="logo"
        width="150"
        height="150"
      />
      <ButtonControls />
      <p className="absolute bottom-8 left-36 -translate-x-1/2 text-xs">
        Move around and explore using these keys
      </p>
    </div>
  );
}
