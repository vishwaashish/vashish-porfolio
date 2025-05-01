import { Button } from "@/components/ui/button";
import { profile } from "@/common/data";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { SlSocialGithub } from "react-icons/sl";

const Contact = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="text-center space-y-6">
        <h4 className="text-heading-md">Have a Project in Mind ?</h4>
        <h3 className="text-8xl font-extrabold">
          LET'S WORK <br />
          TOGETHER
        </h3>
        <div className="flex gap-3 mt-2 justify-center">
          {[
            profile.contact.linkedIn,
            profile.contact.github,
            profile.contact.email,
          ].map((item) => (
            <Button startIcon={<item.icon />} variant={"outlined"} asChild>
              <Link href={item.url}>{item.name}</Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
