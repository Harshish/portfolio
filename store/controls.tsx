"use client";
import { createContext, useContext, useRef } from "react";
import { Object3D } from "three";

type ControlsContextType = {
  car: React.RefObject<Object3D>;
};

const ControlsContext = createContext<ControlsContextType | null>(null);

export function ControlsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const carRef = useRef<Object3D>(null);

  const storeValues = {
    car: carRef,
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
