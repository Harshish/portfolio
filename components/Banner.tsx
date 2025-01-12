import { useObjectControls } from "@/store/controls";
import { CELESTIAL_OBJECTS } from "@/utils/constants";
import { isVector3Near } from "@/utils/utils";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import AboutMe from "./contents/AboutMe";
import Contact from "./contents/Contact";
import Projects from "./contents/Projects";
import Skills from "./contents/Skills";
import StyledWrapper from "./contents/StyledWrapper";

export default function Banner() {
  const ctx = useObjectControls();
  const car = ctx?.car || null;

  const [contentNumber, setContentNumber] = useState<number>(-1);

  useFrame(() => {
    if (!car || !car.current) return;

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
        if (contentNumber !== index) {
          setContentNumber(index);
        }
        isNear = true;
        break;
      }
    }

    if (!isNear && contentNumber !== -1) {
      setContentNumber(-1);
    }
  });

  if (contentNumber === -1) return null;

  return (
    <Html
      position={[
        CELESTIAL_OBJECTS[contentNumber].x,
        CELESTIAL_OBJECTS[contentNumber].y + 5,
        CELESTIAL_OBJECTS[contentNumber].z,
      ]}
    >
      <StyledWrapper>
        <section className="container">
          <div className="card-container">
            {contentNumber === 0 && <AboutMe />}
            {contentNumber === 1 && <Contact />}
            {contentNumber === 2 && <Projects />}
            {contentNumber === 3 && <Skills />}
          </div>
        </section>
      </StyledWrapper>
    </Html>
  );
}
