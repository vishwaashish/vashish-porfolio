import { CiDesktop, CiHome, CiMail, CiUser } from "react-icons/ci";
import { PiEngine } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import { SlSocialGithub } from "react-icons/sl";

export const navigation_menu = {
  home: {
    key: 0,
    icon: CiHome,
    text: "Home",
    path: "/#home",
    id: "home",
  },
  work: {
    key: 2,
    icon: CiDesktop,
    text: "Work",
    path: "/#work-experience",
    id: "work",
  },
  about: {
    key: 1,
    icon: CiUser,
    text: "About",
    path: "/#about-me",
    id: "about-me",
  },
  // blog: {
  //   key: 3,
  //   icon: PiEngine,
  //   text: "Blog",
  //   path: "/blog",
  //   id: "about",
  // },
};
export const profile = {

  aboutme: `Hey there! I’m Ashishkumar Vishwakarma, a frontend developer with 4.5+
        years of experience in building responsive, user-centric websites and
        applications. Currently based in Mumbai, I specialize in React, Angular,
        and Next.js to create interactive and seamless web experiences that
        users love. When I’m not coding, you’ll find me diving into the latest
        frontend trends, working on new side projects, or chatting with fellow
        developers. I’m always eager to learn and improve my skills—whether it’s
        optimizing app performance or adding creative animations. My goal is
        simple: to design the future of the web, one project at a time. If
        you’re looking to collaborate or just want to chat about tech, I’d love
        to connect!`,
  contact: {
    linkedIn: {
      name: "LinkedIn",
      icon: RiLinkedinLine,
      url: "#",
    },
    github: {
      name: "Github",
      icon: SlSocialGithub,
      url: "#",
    },
    email: {
      name: "Email",
      icon: CiMail,
      url: "#",
    },
  },

  experiences: [
    {
      companyLogo: "/Quantasis logo.png",
      company: "Quantasis Pvt Ltd",
      position: "Technical Team Lead & Senior Frontend Engineer",
      responsibilities: [
        "Led a team of 4+ developers, overseeing task management, code reviews, and technical mentorship.",
        "Architected and developed scalable applications using React.js, Angular, and Next.js, improving performance by 30%.",
        "Collaborated with web, mobile (React Native, Flutter), and backend (.NET) teams, ensuring 100% seamless integration across platforms, reducing cross-team dependencies by 30%.",
        "Managed deployments on IIS, AWS Lightsail, and Azure, optimizing cloud workflows and CI/CD pipelines.",
        "Engaged with clients, gathering requirements and proposing solutions that led to a 20% reduction in project turnaround time and a 30% increase in stakeholder satisfaction.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      date: "Nov 2021 - Mar-2023",
    },
    {
      companyLogo: "/tifr logo.png",
      company: "Tata Institute of Fundamental Research",
      position: "Fullstack Developer",
      responsibilities: [
        "Developed web-based applications using HTML, CSS, JavaScript, and PHP.",
        "Assisted in feature implementation and resolved frontend bugs, improving system efficiency.",
        "Contributed to technical documentation and streamlined backend integration.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      date: "Feb 2020 - Mar-2021",
    },
  ],

  projects: [
    {
      title: "VillaVue Branders",
      description:
        "Modern landing page for a brand management agency with responsive design and stylish UI.",
      image: "/projects/villavuebranders.jpg",
    },
    {
      title: "Technotaught",
      description: "Tech blog sharing web development tutorials.",
      image: "/projects/technotaught.jpg",
    },
    {
      title: "React Blog site",
      description: "Minimal blog platform built with React.js.",
      image: "/projects/reactblogsite.jpg",
    },
    {
      title: "Code Snapshot",
      description: "Export high-quality, styled code snapshots easily.",
      image: "/projects/codesnapshot.jpg",
    },
    {
      title: "CodeWind",
      description: "Create and customize beautiful code snippets.",
      image: "/projects/codewind.jpg",
    },
    {
      title: "Lock Screen UI",
      description: "Customizable lock screen with wallpapers and themes.",
      image: "/projects/lockscreen.jpg",
    },
    {
      title: "CSS Loaders Gallery",
      description: "Gallery of creative CSS-only loading animations.",
      image: "/projects/cssloadersgallery.jpg",
    },
    {
      title: "Quotes Generator",
      description: "Random inspirational quotes app.",
      image: "/projects/quotesgenerator.jpg",
    },
    {
      title: "Personal Portfolio (Old)",
      description: "First personal portfolio showcasing frontend skills.",
      image: "/projects/personalportfolioold.jpg",
    },
  ],
};
