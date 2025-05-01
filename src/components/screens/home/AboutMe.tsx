"use client";
import { navigation_menu, profile } from "@/common/data";
import { SectionWithHeader } from "@/components/ui/cards";
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "motion/react";
import React, { useRef } from "react";

const AboutMe = () => {
  const letters = profile.aboutme.split("");
  return (
    <SectionWithHeader title="About Me" id={navigation_menu.about.id}>
      <div className="relative">
        <motion.p className="text-heading-md text-justify text-muted-foreground">
          {letters.map((char, index) => (
            <ScrollAnimatedChar
              char={char}
              key={`${char}-${index}`}
              index={index}
            />
          ))}
        </motion.p>
      </div>
    </SectionWithHeader>
  );
};

interface ScrollAnimatedCharProps {
  char: string;
  index: number;
}

const ScrollAnimatedChar: React.FC<ScrollAnimatedCharProps> = ({
  char,
  index,
}) => {
  const charRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: charRef,
    offset: ["start 90%", "start 55%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const color = useTransform(
    smoothProgress,
    [0, 1],
    ["var(--muted-foreground)", "var(--foreground)"]
  );
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <motion.span
      key={`${char}-${index}`}
      ref={charRef}
      custom={index}
      style={{ opacity, color }}
    >
      {char}
    </motion.span>
  );
};
export default AboutMe;
