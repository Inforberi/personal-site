"use client";

//styles
import { cn } from "@/utils/cn";
import { easeInOut } from "motion";

// hooks
import { motion, HTMLMotionProps } from "motion/react";

// types
import type { ComponentPropsWithoutRef } from "react";

type TextProps = {
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"p"> &
  HTMLMotionProps<"p">;

const pAnimation = {
  hidden: {
    opacity: 0,
    y: -50,
    x: -150,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

const AnimationP = ({ className = "", children, ...props }: TextProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-hidden"
    >
      <motion.p
        variants={pAnimation}
        className={cn("sm:text-lg", "xl:text-xl", "2xl:text-2xl", className)}
        {...props}
      >
        {children}
      </motion.p>
    </motion.div>
  );
};

export default AnimationP;
