"use client";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiDark, CiSun } from "react-icons/ci";
import { cn, throttle } from "../lib/utils";
import { navigation_menu } from "@/common/data";

const menus = Object.values(navigation_menu);
const button =
  "flex justify-center gap-1 items-center p-2 overflow-hidden rounded-full cursor-pointer relative";

const NavbarMenus = ({ animate }: { animate: boolean }) => {
  const pathname = usePathname();
  const [index, setIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const pathIndex = menus.findIndex((menu) => menu.path === pathname);
    if (pathIndex >= 0) {
      setIndex(pathIndex);
    } else {
      const pathIndex = menus.findIndex((menu) =>
        ["/" + window.location.hash].includes(menu.path)
      );
      setIndex(pathIndex || 0);
    }
  }, [pathname]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={cn(
        "flex mx-auto ring-0 rounded-full p-1.5 ring-muted-foreground/50 transition-all",
        animate &&
          "ring backdrop-blur bg-background/30  supports-[backdrop-filter]:bg-background/50 "
      )}
    >
      <div className="relative flex">
        <AnimatePresence>
          {Object.values(navigation_menu).map((item, iIndex) => (
            <Link
              key={item.id}
              href={item.path}
              className={cn(button, index === iIndex && "text-foreground ")}
              onClick={() => {
                setIndex(iIndex);
              }}
            >
              {index === iIndex && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className={cn(
                    "bg-primary w-full h-full rounded-full absolute  -z-10"
                  )}
                  // transition={{
                  //   delay: 0.2,
                  // }}
                ></motion.div>
              )}

              {<item.icon size={25} />}

              {index === iIndex && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="box"

                  // transition={{
                  //   delay: 0.2
                  // }}
                >
                  {item.text}
                </motion.div>
              )}
            </Link>
          ))}

          <button
            className={button}
            onClick={handleToggle}
            aria-label={
              theme !== "light" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            {theme !== "light" ? (
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 180 }}
                exit={{ opacity: 0, rotate: 0 }}
                transition={{
                  duration: 0.3,
                }}
                key="light"
              >
                <CiSun
                  data-theme="light"
                  size={25}
                  className="rotate-0 transform transition-transform duration-500 dark:rotate-180"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{
                  duration: 0.3,
                }}
                key="light"
              >
                <CiDark
                  data-theme="dark"
                  size={25}
                  className="rotate-180 transform transition-transform duration-500 dark:rotate-0"
                />
              </motion.div>
            )}
          </button>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavbarMenus;
