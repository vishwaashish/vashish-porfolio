"use client";
import Blob from "@/components/Blob";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function BlobPage() {
  const targetRef = useRef(null);
  const leftDivRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const [leftDivPosition, setLeftDivPosition] = useState({ x: 0, y: 0 });
  const [thirdSectionPosition, setThirdSectionPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      if (leftDivRef.current) {
        const rect = leftDivRef.current.getBoundingClientRect();
        console.log("rect", rect);
        console.log("Left Div Position:", rect);

        // Get absolute position in document
        const yOffset = window.scrollY || document.documentElement.scrollTop;
        setLeftDivPosition({ x: rect.left, y: yOffset });
      }

      if (thirdSectionRef.current) {
        const rect = thirdSectionRef.current.getBoundingClientRect();
        const yOffset = window.scrollY || document.documentElement.scrollTop;
        setThirdSectionPosition({ x: rect.left, y: yOffset });
      }
    };
    // Initial call & update on window resize
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const x = useTransform(
    scrollYProgress,
    // [0, 0.5, 0.75, 1],
    // ["0%", "-30%", "-30%", "0%"]
    [0, 0.4, 0.7, 1],
    ["0%", "-30%", "0%", "0%"]
  );
  const y = useTransform(
    scrollYProgress,
    // [0, 0.5, 0.75, 1],
    // ["0%", `${leftDivPosition.y}px`, `${leftDivPosition.y}px`, "200%"]
    [0, 0.15, 0.3, 0.6, 0.85, 1], // Wait before moving
    [
      "0%",
      "0%",
      `${leftDivPosition.y}px`,
      `${leftDivPosition.y}px`,
      `${thirdSectionPosition.y}px`,
      "200%",
    ]
  );
  const scale = useTransform(
    scrollYProgress,
    // [0, 0.5, 1], [1.5, 0.5, 0.5]
    [0, 0.3, 0.6, 0.85, 1], // Scale only changes when fully in view
    [1.5, 0.5, 0.5, 2, 1]
  );
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 2 * Math.PI]);

  return (
    <main className="overflow-hidden" ref={targetRef}>
      {/* First Section (Intro) */}
      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold">Ashishkumar Vishwakarma</h1>
          <h2 className="text-2xl mt-4">
            FRONT-END DEVELOPER, UI-ENGINEER, & DESIGNER
          </h2>
        </div>
      </section>

      {/* Blob Animation (Moves & Stops in Skills Section) */}
      <motion.div style={{ x, y }} id="blob" className="">
        <Canvas camera={{ position: [0.0, 2.0, 8.0] }} style={{ height: 1000 }}>
          <Blob scaleValue={scale} rotationValue={rotation} />
        </Canvas>
      </motion.div>

      {/* Second Section (Skills) */}
      <section
        ref={leftDivRef}
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <h2 className="text-6xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-3 gap-10 text-center text-4xl">
          <div>
            {/* <FaReact className="text-blue-500 mx-auto" /> */}
            <p>React</p>
          </div>
          <div>
            {/* <FaAngular className="text-red-500 mx-auto" /> */}
            <p>Angular</p>
          </div>
          <div>
            {/* <FaFigma className="text-purple-500 mx-auto" /> */}
            <p>Figma</p>
          </div>
        </div>
      </section>

      {/* Third Section (For Blob to Move Out) */}
      <section className="min-h-screen flex flex-col justify-center items-center ">
        <h2 className="text-6xl font-bold">Other Projects</h2>
      </section>

      {/* fourth Section (For Blob to Move Out) */}
      <section
        ref={thirdSectionRef}
        className="min-h-screen flex flex-col justify-center items-center "
      >
        <h2 className="text-6xl font-bold">Other Projects</h2>
      </section>
    </main>
  );
}
