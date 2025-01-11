"use client";

// styles
import { cn } from "@/utils/cn";

// animation
import { motion, useScroll, useTransform } from "framer-motion";

// hooks
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import TransitionLink from "@/components/shared/TransitionLink/TransitionLink";

// components
import P from "@/components/shared/htmlTegs/P";

interface ProjectItemProps {
  index: number;
  title: string;
  description: string;
  link: string;
  imageSrc: StaticImageData;
}

const ProjectItem = ({
  index,
  title,
  description,
  link = "/",
  imageSrc,
}: ProjectItemProps) => {
  const ref = useRef(null);

  const even = index % 2 === 0;
  const direction = even ? "-" : "";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-0.1 1", "1 0.9"],
  });

  const motionX = useTransform(
    scrollYProgress,
    [0, 1],
    [`${direction}40%`, "0%"],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [`${direction}10deg`, "0deg"],
  );
  const motionY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const isExternal = link?.startsWith("http");

  return (
    <div
      ref={ref}
      className={cn(
        "relative grid grid-cols-1 grid-rows-1 items-center justify-center gap-8",
        "lg:grid-cols-[47%,_1fr] lg:gap-10",
        "xl:gap-20",
        "2xl:grid-cols-[auto,_1fr] 2xl:gap-28",
        !even && "lg:grid-cols-[1fr,_47%] 2xl:grid-cols-[1fr,_auto]",
        scrollYProgress && "will-change-transform",
      )}
    >
      {/* Фото */}
      <motion.div
        style={{ x: motionX, rotate: rotate }}
        className={cn(
          "mx-auto block aspect-[4/3] size-full w-11/12 overflow-hidden rounded-2xl",
          "sm:w-9/12",
          "lg:col-start-1 lg:w-full",
          "2xl:w-[43.75rem]",
          "transition-transform duration-100 ease-out",
          !even && "lg:!col-start-2",
        )}
      >
        {isExternal ? (
          // Внешняя ссылка
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            className="relative block h-full w-full"
          >
            <Image
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 80vw, 100vw"
              src={imageSrc}
              alt={title}
              fill
            />
          </a>
        ) : (
          // Внутренняя ссылка
          <TransitionLink
            aria-label={title}
            className="relative block h-full w-full"
            href={link}
          >
            <Image
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 80vw, 100vw"
              src={imageSrc}
              alt={title}
              fill
            />
          </TransitionLink>
        )}
      </motion.div>

      {/* Текст */}
      <motion.div
        style={{ y: motionY }}
        className={cn(
          "mx-auto flex flex-col justify-center text-center",
          "lg:col-start-2 lg:mx-0 lg:text-start",
          "transition-transform duration-100 ease-out",
          !even && "lg:!col-start-1 lg:row-start-1",
        )}
      >
        <h2
          className={cn(
            "mb-6 max-w-full text-lg font-bold uppercase !leading-normal",
            "sm:text-2xl",
            "lg:mb-8",
            "xl:text-3xl",
            "2xl:text-4xl",
          )}
        >
          {title}
        </h2>
        <P>{description}</P>
      </motion.div>
    </div>
  );
};

export default ProjectItem;
