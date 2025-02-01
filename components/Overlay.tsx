"use client";
import ControlsView from "./contents/ControlsView";

export default function Overlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <ControlsView />
    </div>
  );
}
