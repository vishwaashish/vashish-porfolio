import { cn } from "@/components/lib/utils";
import { Button } from "@/components/ui/button";
import { navigation_menu, profile } from "@/common/data";
import Image from "next/image";
import React from "react";
import { SectionWithHeader } from "@/components/ui/cards";

const WorkExperience = () => {
  return (
    <SectionWithHeader
      id={navigation_menu.work.id}
      title="Companies I've Helped Grow"
      name="WORK EXPERIENCE"
      description="I've had the opportunity to build, scale, and optimize web applications across diverse industries. Every role sharpened my skills in creating seamless user experiences, leading teams, and delivering impactful digital solutions."
      className="my-16"
    >
      <div className="grid md:grid-cols-12 gap-10">
        <div className="space-y-10  col-span-9">
          {profile.experiences.map((item) => {
            return (
              <div key={item.company}>
                <div className="bg-car rounded-2xl shadow p-10 ">
                  <div className="flex flex-wrap gap-2 items-center justify-between">
                    <Image
                      className="h-12 w-auto"
                      src={item.companyLogo}
                      width={200}
                      height={100}
                      alt={item.company}
                    ></Image>
                    <div className="text-right">
                      <p className="">{item.company}</p>
                      <p className="text-foreground md:hidden">{item.date}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium my-4">{item.position}</h3>
                  <ul className="list-disc ml-5 mb-4 text-muted-foreground">
                    {item.responsibilities.map((res) => (
                      <li key={res}>{res}</li>
                    ))}
                  </ul>
                  <div className="flex space-x-2">
                    {item.technologies.map((res, index) => (
                      <span className="font-mono" key={res}>
                        {res}
                        {item.technologies.length - 1 !== index && ","}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" hidden md:block md:col-span-3 relative before:left-0  before:h-full before:absolute text-right  before:content-[''] before:bg-[linear-gradient(var(--muted-foreground)_33%,rgba(255,255,255,0)_0%)] before:bg-top before:bg-size-[1px_12px] before:bg-repeat-y before:w-1">
          <div className="sticky top-20 space-y-10">
            {profile.experiences.map((item, index) => {
              return (
                <div className="pl-0.5 flex items-center">
                  <div
                    className={cn(
                      "bg-[linear-gradient(to_right,var(--muted-foreground)_33%,rgba(255,255,255,0)_0%)] h-2 w-full bg-bottom bg-repeat-x bg-size-[12px_1px]",
                      index === 0 &&
                        "bg-[linear-gradient(to_right,var(--primary)_33%,rgba(255,255,255,0)_0%)]"
                    )}
                  ></div>
                  <Button
                    variant={"ghost"}
                    className={cn("", index == 0 && "text-primary")}
                  >
                    <time className="truncate">{item.date}</time>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWithHeader>
  );
};

export default WorkExperience;
