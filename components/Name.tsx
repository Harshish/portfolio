import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Name() {
  const ref = useRef<Mesh>(null);
  const colorChangeDelay = useRef(0);

  useFrame((_, delta) => {
    if (!ref.current) return;

    // Increment the delay counter
    colorChangeDelay.current += delta;

    // Change color every 0.5 seconds (adjust as needed)
    if (colorChangeDelay.current > 0.2) {
      // Generate a random bright color
      const randomColor = [
        "#ea00d9",
        "#0abdc6",
        "#ff2a6d",
        "#fee801",
        "#3fff2d",
      ];
      const randomIndex = Math.floor(Math.random() * randomColor.length);

      // Update the emissive color and intensity
      // @ts-expect-error meshPhongMaterial properties are not detected
      ref.current.material.color.set(randomColor[randomIndex]);
      // @ts-expect-error meshPhongMaterial properties are not detected
      ref.current.material.emissive.set(randomColor[randomIndex]);
      //ref.current.material.emissiveIntensity = Math.random();
      // Reset the delay counter
      colorChangeDelay.current = 0;
    }
  });

  return (
    <Text3D
      ref={ref}
      font="fonts/altroned.json"
      bevelEnabled
      bevelSize={0.05}
      bevelThickness={0.05}
      position={[-5, 0, 0]}
    >
      HARSIS YADAV
      <meshPhongMaterial emissiveIntensity={1.3} />
    </Text3D>
  );
}
