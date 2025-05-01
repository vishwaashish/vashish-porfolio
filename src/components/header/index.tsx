"use client";
import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import Timer from "../timer";
import NavbarMenus from "./NavbarMenus";

const Header = () => {
  const { scrollY } = useScroll();
  const [hideSides, setHideSides] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHideSides(latest > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return;
  }
  return (
    <div className="fixed w-full z-10">
      <div className="grid md:grid-cols-[auto_1fr_auto] w-full items-center container py-3">
        <motion.div
          className="hidden md:block"
          animate={hideSides ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Asia/India
        </motion.div>
        <NavbarMenus animate={hideSides} />
        <motion.div
          className="hidden md:block"
          animate={hideSides ? { x: -200, opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Timer />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
