"use client";
import { createContext, RefObject, useContext, useRef, useState } from "react";
import { Object3D } from "three";

type Movement = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
};

type ControlsContextType = {
  car: RefObject<Object3D>;
  carMovement: Movement;
  setCarMovement: React.Dispatch<React.SetStateAction<Movement>>;
  nearContent: number | null;
  setNearContent: React.Dispatch<React.SetStateAction<number | null>>;
};

const ControlsContext = createContext<ControlsContextType | null>(null);

export function ControlsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const carRef = useRef<Object3D>(null);
  const [carMovement, setCarMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  } as Movement);
  const [nearContent, setNearContent] = useState<number | null>(null);

  const storeValues = {
    car: carRef,
    carMovement: carMovement,
    setCarMovement: setCarMovement,
    nearContent: nearContent,
    setNearContent: setNearContent,
  };

  return (
    <ControlsContext.Provider value={storeValues}>
      {children}
    </ControlsContext.Provider>
  );
}

export function useObjectControls() {
  return useContext(ControlsContext);
}
