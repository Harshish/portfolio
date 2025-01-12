import { CELESTIAL_OBJECTS } from "@/utils/constants";
import { Vector3 } from "three";
import CelestialBody from "./CelestialBody";

export function CelestialBodies() {
  return (
    <>
      {CELESTIAL_OBJECTS.map((obj) => (
        <CelestialBody
          key={`celestial-body-${obj.name}`}
          position={new Vector3(obj.x, obj.y, obj.z)}
          textPosition={new Vector3(obj.tx, obj.ty, obj.tz)}
          textRotation={new Vector3(0, obj.rty, 0)}
          text={obj.name}
          color={obj.color}
        />
      ))}
    </>
  );
}
