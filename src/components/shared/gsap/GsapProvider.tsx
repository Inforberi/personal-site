"use client";

import { loadGsap } from "@/utils/loadGsap";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  isMobile: boolean;
};

const GsapProvider = ({ children, isMobile }: Props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isMobile) return;

    let smoother: { kill: () => void } | null = null;
    let mounted = true;

    const initGsap = async () => {
      const gsap = await loadGsap();

      if (!mounted || !wrapperRef.current || !contentRef.current) return;

      smoother = gsap.ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1,
        effects: true,
        normalizeScroll: false,
      });
    };

    initGsap();

    return () => {
      mounted = false;
      smoother?.kill();
    };
  }, [isMobile]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default GsapProvider;
