"use client";

// hooks
import { motion, HTMLMotionProps } from "motion/react";

// styles
import { cn } from "@/utils/cn";

// types
import type { ComponentPropsWithoutRef } from "react";

type HeadingVariant = "h1" | "h2" | "h3";

type HeadingProps = {
  as?: HeadingVariant;
  animation?: boolean;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<HeadingVariant> &
  HTMLMotionProps<HeadingVariant>;

const letterAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.9, 0.64, 1],
      delay: delay * 0.04,
    },
  }),
};

const hAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: {
        duration: 0.8,
        ease: "easeInOut",
      },
      y: {
        duration: 1.5,
        ease: [0.34, 1.4, 0.64, 1],
        type: "tween",
      },
      scale: {
        duration: 1.5,
        ease: [0.34, 1.4, 0.64, 1],
        type: "tween",
      },
    },
  },
};

const TodoHeading = ({
  as = "h2",
  animation = true,
  className = "",
  children,
  ...props
}: HeadingProps) => {
  if (!animation) {
    const Element = as;

    return (
      <Element
        className={cn(
          as === "h1" &&
            "mb-16 text-center text-2xl font-semibold sm:mb-20 sm:text-4xl lg:text-3xl xl:text-4xl 2xl:mb-24 2xl:text-5xl",
          as === "h2" &&
            "mb-6 text-xl sm:mb-10 sm:text-2xl lg:mb-12 xl:mb-16 xl:text-3xl 2xl:mb-20 2xl:text-4xl",
          as === "h3" && "text-lg sm:text-xl xl:text-2xl 2xl:text-3xl",
          className,
        )}
        {...props}
      >
        {children}
      </Element>
    );
  }

  const Component = motion.create(as);

  if (as === "h1") {
    const text = String(children);
    let globalIndex = 0;

    const splitText = text.split(" ").map((word, wordIndex) => (
      <span
        key={`word-${wordIndex}`}
        className="inline-block whitespace-pre-wrap"
      >
        {word.split("").map((letter) => {
          globalIndex++;
          return (
            <motion.span
              key={`letter-${globalIndex}`}
              className={cn("inline-block")}
              variants={letterAnimation}
              custom={globalIndex}
            >
              {letter}
            </motion.span>
          );
        })}{" "}
      </span>
    ));

    return (
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn(
          "mb-16 text-center text-2xl font-semibold",
          "sm:mb-20 sm:text-4xl",
          "lg:text-3xl",
          "xl:text-4xl",
          "2xl:mb-24 2xl:text-5xl",
          className,
        )}
        {...props}
      >
        {splitText}
      </motion.h1>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        as === "h2" &&
          "mb-6 text-center text-xl sm:mb-10 sm:text-2xl lg:mb-12 xl:mb-16 xl:text-3xl 2xl:mb-20 2xl:text-4xl",
        as === "h3" && "text-lg sm:text-xl xl:text-2xl 2xl:text-3xl",
        className,
      )}
    >
      <Component variants={hAnimation} {...props}>
        {children}
      </Component>
    </motion.div>
  );
};

export default TodoHeading;
