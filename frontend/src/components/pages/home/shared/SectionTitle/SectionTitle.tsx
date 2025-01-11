"use client";

// styles
import { cn } from "@/utils/cn";

// icon
import ArrowIcon from "@/components/shared/icons/ArrowIcon";

// hooks
import { motion } from "motion/react";

interface SectionTitleProps {
  text: string;
}

const arrowVariant = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const textVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      className={cn(
        "mb-10 flex items-center gap-5",
        "sm:mb-12",
        "lg:mb-14 lg:gap-7",
        "xl:mb-16",
        "2xl:mb-20",
      )}
    >
      <motion.span variants={arrowVariant}>
        <ArrowIcon
          className={cn(
            "h-auto w-7 rotate-180",
            "sm:w-10",
            "lg:w-12",
            "xl:w-14",
            "2xl:w-18",
          )}
        />
      </motion.span>
      <motion.h2
        variants={textVariant}
        className={cn(
          "text-2xl font-semibold uppercase !leading-normal",
          "sm:text-3xl",
          "lg:text-4xl",
          "xl:text-5xl",
          "2xl:text-6xl",
        )}
      >
        {text}
      </motion.h2>
    </motion.div>
  );
};

export default SectionTitle;
