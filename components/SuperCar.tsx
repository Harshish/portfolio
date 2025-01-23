"use client";
import useKeyboard from "@/hooks/useKeyboard";
import { useObjectControls } from "@/store/controls";
import { lerp } from "@/utils/utils";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";

export default function SuperCar() {
  const { scene } = useGLTF("models/spacecar.glb");
  const keyMap = useKeyboard();
  const ctx = useObjectControls();
  const ref = ctx?.car || null;
  const { camera } = useThree();

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isObject3D) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (!ref || !ref.current) return;

    const speed = 10; // Movement speed
    const rotationSpeed = Math.PI / 2; // Rotation speed
    const worldBounds = 25;

    // Forward and backward movement (KeyW and KeyS)
    if (keyMap["KeyW"] || ctx?.carMovement.forward) {
      ref.current.position.x +=
        Math.sin(ref.current.rotation.y) * delta * speed;
      ref.current.position.z +=
        Math.cos(ref.current.rotation.y) * delta * speed;
      ref.current.rotation.x = lerp(ref.current.rotation.x, Math.PI / 18, 0.1);
    }
    if (keyMap["KeyS"] || ctx?.carMovement.backward) {
      ref.current.position.x -=
        Math.sin(ref.current.rotation.y) * delta * speed;
      ref.current.position.z -=
        Math.cos(ref.current.rotation.y) * delta * speed;
      ref.current.rotation.x = lerp(ref.current.rotation.x, -Math.PI / 12, 0.1);
    }

    // Left and right rotation (KeyA and KeyD)
    if (keyMap["KeyA"] || ctx?.carMovement.left) {
      ref.current.rotation.y += rotationSpeed * delta; // Rotate left
      ref.current.rotation.z = lerp(ref.current.rotation.z, -Math.PI / 12, 0.1);
    }
    if (keyMap["KeyD"] || ctx?.carMovement.right) {
      ref.current.rotation.y -= rotationSpeed * delta; // Rotate right
      ref.current.rotation.z = lerp(ref.current.rotation.z, Math.PI / 18, 0.1);
    }
    ref.current.rotation.x = lerp(ref.current.rotation.x, 0, 0.1);
    ref.current.rotation.z = lerp(ref.current.rotation.z, 0, 0.1);

    // Calculate camera position relative to the back of the object
    const backOffset = 7; // Distance behind the object
    const heightOffset = 5; // Height above the object

    const backPosition = new Vector3(
      ref.current.position.x - Math.sin(ref.current.rotation.y) * backOffset,
      ref.current.position.y + heightOffset,
      ref.current.position.z - Math.cos(ref.current.rotation.y) * backOffset,
    );

    camera.position.lerp(backPosition, 0.1);
    camera.lookAt(ref.current.position);

    if (
      ref.current.position.x < -worldBounds ||
      ref.current.position.x > worldBounds ||
      ref.current.position.z < -worldBounds ||
      ref.current.position.z > worldBounds
    ) {
      ref.current.position.x = Math.max(
        -worldBounds,
        Math.min(worldBounds, ref.current.position.x),
      );
      ref.current.position.z = Math.max(
        -worldBounds,
        Math.min(worldBounds, ref.current.position.z),
      );
    }
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={1}
      rotation={[0, Math.PI, 0]}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload("models/spacecar.glb");
