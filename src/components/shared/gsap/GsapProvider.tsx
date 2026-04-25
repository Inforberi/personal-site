"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const GsapProvider = ({ children }: Props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let smoother: { kill: () => void } | null = null;
    let mounted = true;

    const initGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");

      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      if (!wrapperRef.current || !contentRef.current) return;

      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1,
        effects: true,
        normalizeScroll: true,
      });
    };

    initGsap();

    return () => {
      mounted = false;
      smoother?.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default GsapProvider;
