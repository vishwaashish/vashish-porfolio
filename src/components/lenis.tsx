"use client";
import Lenis from "lenis";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { throttle } from "./lib/utils";

type LenisContextType = {
  lenis: Lenis | null;
  scrollY: number;
};

export const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollY: 0,
});

export const LenisWapper = ({ children }: { children?: ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const lenisInstance = new Lenis({
    //   autoRaf: true,
    });

    lenisRef.current = lenisInstance;
    // setLenis(lenisInstance);

    const raf = (time: number) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // const handleScroll = throttle(({ scroll }: { scroll: number }) => {
    //   setScrollY(scroll);
    // }, 100);
    const handleScroll = ({ scroll }: { scroll: number }) => {
      setScrollY(scroll);
    };

    lenisInstance.on("scroll", handleScroll);

    return () => {
      lenisInstance.off("scroll", handleScroll);
      lenisInstance.destroy();
    };
  }, []);
  return (
    <LenisContext.Provider value={{ lenis, scrollY }}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = (): LenisContextType => {
  return useContext(LenisContext);
};
