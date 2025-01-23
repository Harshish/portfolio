import { SpotLight, Text3D } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Mesh, Object3D, SphereGeometry, Vector3 } from "three";

export default function CelestialBody({
  position,
  textPosition,
  textRotation,
  color,
  text,
}: {
  position: Vector3;
  textPosition: Vector3;
  textRotation: Vector3;
  color: string;
  text: string;
}) {
  const spotlightTarget = useMemo(() => new Object3D(), []);
  const meshRef = useRef<Mesh>(null);
  //let geometry = null;
  const geometry = new SphereGeometry(1, 32, 32);

  // if (text === "About Me") {
  //   geometry = new SphereGeometry(1, 32, 32);
  // } else if (text === "Contact") {
  //   geometry = new ConeGeometry(1, 2, 32);
  // } else if (text === "Projects") {
  //   geometry = new TorusKnotGeometry();
  // } else if (text === "Skills") {
  //   geometry = new OctahedronGeometry(1.5);
  // } else {
  //   geometry = new SphereGeometry(1, 32, 32);
  // }
  //
  // useFrame((_, delta) => {
  //   if (!meshRef.current) return;
  //   meshRef.current.rotation.z += delta;
  //   meshRef.current.rotation.y += delta;
  // });

  return (
    <>
      <mesh position={position} geometry={geometry} ref={meshRef}>
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={2}
          color={color}
        />
      </mesh>
      <pointLight
        color={color}
        intensity={200}
        distance={100}
        decay={2}
        position={[position.x, -1, position.z]}
        castShadow
      />
      <SpotLight
        castShadow
        distance={20}
        angle={0.5}
        attenuation={50}
        intensity={3}
        color={color}
        target={spotlightTarget}
        position={[position.x, position.y - 1, position.z]}
      />
      <primitive
        object={spotlightTarget}
        position={[position.x, 7, position.z]}
      />
      <Text3D
        font="fonts/altroned.json"
        bevelEnabled
        bevelSize={0.05}
        bevelThickness={0.05}
        position={[textPosition.x, textPosition.y, textPosition.z]}
        rotation={[textRotation.x, textRotation.y, textRotation.z]}
      >
        {text}
        <meshPhongMaterial emissive={color} />
      </Text3D>
    </>
  );
}
