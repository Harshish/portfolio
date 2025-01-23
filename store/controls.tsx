"use client";
import { PublicApi } from "@react-three/cannon";
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

  const storeValues = {
    car: carRef,
    carMovement: carMovement,
    setCarMovement: setCarMovement,
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
