import { useObjectControls } from "@/store/controls";
import { CELESTIAL_OBJECTS } from "@/utils/constants";
import { isVector3Near } from "@/utils/utils";
import { useFrame } from "@react-three/fiber";

export default function PositionTracker() {
  const ctx = useObjectControls();
  const car = ctx?.car || null;

  useFrame(() => {
    if (!car || !car.current || !ctx) return;

    let isNear = false;

    for (let index = 0; index < CELESTIAL_OBJECTS.length; index++) {
      const obj = CELESTIAL_OBJECTS[index];
      if (
        isVector3Near(
          [
            car.current.position.x,
            car.current.position.y,
            car.current.position.z,
          ],
          [obj.x, obj.y, obj.z],
          5,
        )
      ) {
        if (ctx.nearContent !== index) {
          ctx.setNearContent(index);
        }
        isNear = true;
        break;
      }
    }

    if (!isNear && ctx.nearContent !== -1) {
      ctx.setNearContent(null);
    }
  });

  return null;
}
