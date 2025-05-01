import { SectionWithHeader } from "@/components/ui/cards";
import { Button } from "@/components/ui/button";
import { profile } from "@/common/data";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <SectionWithHeader
      name="PROJECTS"
      title="Things I've worked on"
      description="Showcasing a collection of web experiences, UI tools, and real-world solutions I've built with creativity, performance, and user experience at the core."
      className="py-32"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
        {profile.projects.map((project) => {
          return (
            <div className="space-y-2 dark" data-theme="dark">
              <div className="cursor-hover  group relative z-0 block overflow-hidden">
                <Image
                  alt="HOOGA back"
                  loading="lazy"
                  width="411"
                  height="306"
                  className="h-full w-full  transition-transform duration-500 ease-in-out group-hover:scale-125"
                  sizes="100vw"
                  src={project.image}
                />
                <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_30%,rgba(0,0,0,1)_100%)] absolute top-0 w-full h-full flex items-end pb-10 justify-center  text-lg md:text-2xl font-bold transition-transform duration-500 ease-in-out group-hover:scale-110">
                  {project.title}
                </div>
              </div>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
      <Button className="mx-auto mt-10" variant={"outlined"}>
        View More
      </Button>
    </SectionWithHeader>
  );
};

export default Projects;
