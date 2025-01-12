import { Vector3 } from "three";

export function lerp(from: number, to: number, speed: number): number {
  const r = (1 - speed) * from + speed * to;
  return Math.abs(from - to) < 0.001 ? to : r;
}

export function isVector3Near(
  point1: number[],
  point2: number[],
  threshold: number,
): boolean {
  const v1 = new Vector3(...point1);
  const v2 = new Vector3(...point2);
  const distance = v1.distanceTo(v2);
  return distance <= threshold;
}
