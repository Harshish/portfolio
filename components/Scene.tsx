"use client";

import { Canvas, extend } from "@react-three/fiber";
import { Effects, Environment, Float } from "@react-three/drei";
import SuperCar from "./SuperCar";
import Stars from "./Stars";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { CelestialBodies } from "./CelestialBodies";
import Planets from "./Planets";
import Name from "./Name";
import PositionTracker from "./PositionTracker";

extend({ UnrealBloomPass });

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 100, 30] }} shadows>
      <directionalLight intensity={1} position={[10, 10, -10]} castShadow />
      <ambientLight intensity={0.8} />
      <Effects disableGamma>
        {/*// @ts-expect-error unrealBloomPass is not detected*/}
        <unrealBloomPass threshold={1} strength={0.6} radius={0.5} />
      </Effects>
      <CelestialBodies />
      <Stars />
      <Float floatIntensity={0.5} speed={2} rotationIntensity={0.5}>
        <SuperCar />
      </Float>
      <PositionTracker />
      <Environment
        files="envmap/dikhololo_night_1k.hdr"
        background
        backgroundBlurriness={0.35}
        backgroundIntensity={0.5}
      />

      <Float floatIntensity={1} speed={5} rotationIntensity={1}>
        <Name />
      </Float>
      <Planets />

      {/*<Perf position="top-left" />*/}
    </Canvas>
  );
}
