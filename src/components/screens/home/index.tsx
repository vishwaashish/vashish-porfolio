import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { RiLinkedinLine } from "react-icons/ri";
import { SlSocialGithub } from "react-icons/sl";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import { navigation_menu } from "@/common/data";

export default function Home() {
  const marqueeText = [
    ["LET'S CREATE SOMETHING AMAZING "],
    ["DESIGNING THE FUTURE OF THE WEB "],
    ["CREATING ENGAGING DIGITAL EXPERIENCES "],
  ];
  return (
    <div className="">
      <section className="min-h-screen flex justify-center flex-wrap items-center relative" id={navigation_menu.home.id}>
        <div className="grid grid-cols-5 gap-10 max-w-2xl container">
          <div className="col-span-2">
            <Image
              src="/ashish-profile.png"
              className="rounded-full"
              width={1000}
              height={1000}
              alt="Ashish Porfolio"
            ></Image>
          </div>
          <div className="flex flex-col gap-3 col-span-3">
            <h2 className="text-heading-sm">
              Hi, I am a{" "}
              <span className="text-primary font-bold font-geist">
                Frontend developer{" "}
              </span>
            </h2>
            <h1 className="text-display-lg font-[900] leading-14   ">
              Ashishkumar Vishwakarma
            </h1>
            <p>
              I create intuitive, responsive websites with user-centered design
              and cutting-edge technology, bringing engaging web applications to
              life.
            </p>

            <div className="flex gap-3 mt-2">
              <Button startIcon={<SlSocialGithub />} variant={"outlined"}>
                Github
              </Button>
              <Button startIcon={<RiLinkedinLine />} variant={"outlined"}>
                LinkedIn
              </Button>
              <Button startIcon={<CiMail />} variant={"outlined"}>
                Email
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12">
          <Button
            variant={"text"}
            startIcon={<MdKeyboardDoubleArrowDown />}
            endIcon={<MdKeyboardDoubleArrowDown />}
          >
            Scroll to more
          </Button>
        </div>
      </section>

      <WorkExperience />
      <Projects />
      <AboutMe />
      <section className="overflow-hidden mt-48">
        <div className="flex flex-col gap-2 py-10 rotate-5  whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          {marqueeText.map((marque, index) => {
            return (
              <Marquee
                key={JSON.stringify(marque)}
                pauseOnHover
                reverse={index % 2 == 0}
                speed={2}
              >
                {marque.map((marqueText) => (
                  <span
                    key={marqueText}
                    className="text-9xl font-extrabold tracking-tight"
                  >
                    {marqueText}
                  </span>
                ))}
              </Marquee>
            );
          })}
        </div>
      </section>

      <Contact />
    </div>
  );
}
