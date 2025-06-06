"use client";
import { SectionWithHeader } from "@/components/ui/cards";
import { Button } from "@/components/ui/button";
import { profile } from "@/common/data";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const Projects = () => {
  return (
    <SectionWithHeader
      name="PROJECTS"
      title="Things I've worked on"
      description="Showcasing a collection of web experiences, UI tools, and real-world solutions I've built with creativity, performance, and user experience at the core."
      className="py-32"
      id="projects"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
        {profile.projects.map((project) => {
          return (
            <ProjectItem key={project.title} title={project.title} description={project.description} image={project.image} />
          );
        })}
      </div>
      <Button className="mx-auto mt-10" variant={"outlined"}>
        View More
      </Button>
    </SectionWithHeader>
  );
};


function ProjectItem({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="space-y-2 dark" data-theme="dark" ref={ref}>
      <div className="cursor-hover  group relative z-0 block overflow-hidden">
        <motion.div style={{ y }}>
          <Image
            alt="HOOGA back"
            loading="lazy"
            width="411"
            height="306"
            className="h-full w-full  transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="100vw"
            src={image}
          />
        </motion.div>
        <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_30%,rgba(0,0,0,1)_100%)] absolute top-0 w-full h-full flex items-end pb-10 justify-center  text-lg md:text-2xl font-bold transition-transform duration-500 ease-in-out group-hover:scale-110">
          {title}
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
export default Projects;
