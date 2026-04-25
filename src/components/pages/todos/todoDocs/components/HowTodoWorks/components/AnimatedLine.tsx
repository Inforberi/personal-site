"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import { useInView } from "motion/react";
import { useRef } from "react";

const AnimatedLine = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, amount: "all" });

  return (
    <div
      ref={lineRef}
      className={cn(
        "duration-1500 h-[1px] w-full origin-center scale-x-0 transform bg-primary transition-transform ease-in-out",
        isInView && "scale-x-100",
        "lg:h-[2px]",
      )}
    ></div>
  );
};

export default AnimatedLine;
