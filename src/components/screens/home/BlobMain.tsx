"use client";
import Blob from "@/components/Blob";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import WorkExperience from "./WorkExperience";
export interface RangeValue {
  x: [number, string];
  y: [number, string];
  scale: number[];
  rotation: number[];
}
function BlobMain() {
  const { scrollY } = useScroll();
  const [range, setRange] = useState<Record<string, RangeValue>>({
    start: {
      x: [0, "0%"],
      y: [0, "0%"],
      scale: [0, 0.7],
      rotation: [0, 0],
    },
  });
  const [rotation, setRotation] = useState<number>(0);

  useLayoutEffect(() => {
    function updatePositions() {
      const profileElement = document.querySelector("#home-profile-image");
      const workSideElement = document.querySelector("#blob-work-experience");
      const workElement = document.querySelector("#work");
      const aboutMeElement = document.querySelector("#about-me");
      const projectsElement = document.querySelector("#projects");
      const marqueElement = document.querySelector("#marque-text");
      const footerElement = document.querySelector("#footer");
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        setRotation(footerRect.top);
      }

      if (
        profileElement &&
        workSideElement &&
        workElement &&
        aboutMeElement &&
        projectsElement &&
        marqueElement
      ) {
        const profileRect = profileElement?.getBoundingClientRect();
        // const profileCenterX = (profileRect.left + profileRect.width) / 2;
        // const profileCenterY = (profileRect.top + profileRect.height) / 2;

        const workSideRect = workSideElement.getBoundingClientRect();
        const workRect = workElement.getBoundingClientRect();
        const projectsRect = projectsElement.getBoundingClientRect();
        const aboutMeRect = aboutMeElement.getBoundingClientRect();
        const marqueRect = marqueElement.getBoundingClientRect();

        setRange((prevRange) => ({
          profileStart: {
            x: [0, `0%`],
            y: [0, `50%`],
            scale: [0, 10],
            rotation: [0, 0],
          },
          workExperienceStart: {
            x: [workSideRect.top, `37%`],
            y: [workSideRect.top, `10%`],
            scale: [workSideRect.top, 8],
            rotation: [workSideRect.top, 8],
          },
          workExperienceEnd: {
            x: [workRect.bottom, `37%`],
            y: [workRect.bottom, `10%`],
            scale: [workRect.bottom, 0],
            rotation: [workRect.bottom, 0],
          },
          project: {
            x: [projectsRect.top, `0%`],
            y: [projectsRect.top, `0%`],
            scale: [projectsRect.top, 0],
            rotation: [projectsRect.top, 0],
          },
          projectEnd: {
            x: [projectsRect.bottom - 100, `0%`],
            y: [projectsRect.bottom - 100, `0%`],
            scale: [projectsRect.bottom - 100, 0],
            rotation: [projectsRect.bottom - 100, 0],
          },
          aboutMeStart: {
            x: [aboutMeRect.top + 100, `0%`],
            y: [aboutMeRect.top + 100, `0%`],
            scale: [aboutMeRect.top + 100, 25],
            rotation: [aboutMeRect.top + 100, 25],
          },
          aboutMeBottom: {
            x: [aboutMeRect.bottom, `0%`],
            y: [aboutMeRect.bottom, `0%`],
            scale: [aboutMeRect.bottom, 25],
            rotation: [aboutMeRect.bottom, 25],
          },
          marqueRect: {
            x: [marqueRect.top + 50, `0%`],
            y: [marqueRect.top + 50, `0%`],
            scale: [marqueRect.top + 50, 12],
            rotation: [marqueRect.top + 50, 12],
          },
        }));
      }
    }

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  const xInput = Object.values(range).map((a) => a.x[0]);
  const xOutput = Object.values(range).map((a) => a.x[1]);
  const yInput = Object.values(range).map((a) => a.y[0]);
  const yOutput = Object.values(range).map((a) => a.y[1]);
  const scaleInput = Object.values(range).map((a) => a.scale[0]);
  const scaleOutput = Object.values(range).map((a) => a.scale[1]);
  const rotaionInput = Object.values(range).map((a) => a.rotation[0]);
  const rotationOutput = Object.values(range).map((a) => a.rotation[1]);

  const x = useTransform(scrollY, xInput, xOutput);
  const y = useTransform(scrollY, yInput, yOutput);
  const scale = useTransform(scrollY, scaleInput, scaleOutput);
  const rotationValue = useTransform(scrollY, [0, rotation], [0, 50]);
  // const rotationValue = useTransform(scrollY, rotaionInput, rotationOutput);

  // const x = useTransform(scrollY, [0, 500, 1300, 1800, 1550, 3500], ["-17%", "37%", "37%", "0%", "0%", "0%"]);
  // const y = useTransform(scrollY, [0, 500, 1300, 1800, 1550, 3500], ["-7%", "10%", "10%", "0%", "0%", "0%"],);
  // const scale = useTransform(scrollY, [0, 500, 1300, 1800, 1550, 3500], [1, 0.7, 0.7, 0, 0, 3]);

  return (
    <motion.div
      className="fixed -z-10"
      style={{ x, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2,
        duration: 2,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <motion.div
        style={{ width: "100vw", height: "100vh", position: "relative" }}
      >
        <Canvas
          camera={{ position: [0.0, 0.0, 60.0] }}
          style={{ width: "100%", height: "100%" }}
        >
          <Blob scaleValue={scale} rotationValue={rotationValue} />
        </Canvas>
      </motion.div>
    </motion.div>
  );
}

export default BlobMain;
