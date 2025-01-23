"use client";
import { useObjectControls } from "@/store/controls";
import Image from "next/image";

export default function Overlay() {
  const ctx = useObjectControls();
  const setCarMovement = ctx?.setCarMovement;

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Image
        className="absolute bottom-0 left-28 translate-x-[-50%] translate-y-[-50%]"
        src="Controls.png"
        alt="logo"
        width="150"
        height="150"
      />
      <button
        type="button"
        className="absolute bottom-[7.4rem] left-[6.1rem] bg-white px-[0.38rem] py-[0.14rem] hover:bg-gray-300 text-black rounded active:bg-gray-500"
        onMouseDown={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, forward: true }));
        }}
        onMouseUp={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, forward: false }));
        }}
        onTouchStart={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, forward: true }));
        }}
        onTouchEnd={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, forward: false }));
        }}
      >
        W
      </button>
      <button
        type="button"
        className="absolute bottom-[5.21rem] left-[6.13rem] bg-white px-2 py-[0.14rem] hover:bg-gray-300 text-black rounded active:bg-gray-500"
        onMouseDown={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, backward: true }));
        }}
        onMouseUp={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, backward: false }));
        }}
        onTouchStart={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, backward: true }));
        }}
        onTouchEnd={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, backward: false }));
        }}
      >
        S
      </button>
      <button
        type="button"
        className="absolute bottom-[5.21rem] left-[3.95rem] bg-white px-[0.52rem] py-[0.14rem] hover:bg-gray-300 text-black rounded active:bg-gray-500"
        onMouseDown={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, left: true }));
        }}
        onMouseUp={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, left: false }));
        }}
        onTouchStart={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, left: true }));
        }}
        onTouchEnd={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, left: false }));
        }}
      >
        A
      </button>
      <button
        type="button"
        className="absolute bottom-[5.21rem] left-[8.24rem] bg-white px-2 py-[0.14rem] hover:bg-gray-300 text-black rounded active:bg-gray-500"
        onMouseDown={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, right: true }));
        }}
        onMouseUp={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, right: false }));
        }}
        onTouchStart={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, right: true }));
        }}
        onTouchEnd={() => {
          if (setCarMovement)
            setCarMovement((prev) => ({ ...prev, right: false }));
        }}
      >
        D
      </button>
      <p className="absolute bottom-8 left-36 -translate-x-1/2 text-xs">
        Move around and explore using these keys
      </p>
    </div>
  );
}
