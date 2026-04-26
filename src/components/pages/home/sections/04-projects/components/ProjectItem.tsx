"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

// components
import P from "@/components/shared/htmlTegs/P";
import { loadGsap } from "@/utils/loadGsap";

interface ProjectItemProps {
  index: number;
  title: string;
  description: string;
  imageSrc: StaticImageData;
}

const ProjectItem = ({
  index,
  title,
  description,
  imageSrc,
}: ProjectItemProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;
    let mounted = true;

    const initGsap = async () => {
      const gsap = await loadGsap();

      if (!mounted) {
        return;
      }

      ctx = gsap.context(() => {
        gsap.to(imageRef.current, {
          translateX: 0,
          yPercent: 0,
          rotate: 0,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
            end: "top 20%",
            scrub: true,
          },
        });

        gsap.to(textRef.current, {
          translateY: 0,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
            end: "top 10%",
            scrub: true,
          },
        });
      }, rootRef);
    };

    initGsap();

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, [rootRef]);

  const even = index % 2 === 0;
  const direction = even ? "-" : "";

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative grid grid-cols-1 grid-rows-1 items-center justify-center gap-8",
        "lg:grid-cols-[47%,_1fr] lg:gap-10",
        "xl:gap-20",
        "2xl:grid-cols-[auto,_1fr] 2xl:gap-28",
        !even && "lg:grid-cols-[1fr,_47%] 2xl:grid-cols-[1fr,_auto]",
      )}
    >
      {/* Фото */}
      <div
        ref={imageRef}
        className={cn(
          "mx-auto block aspect-[4/3] size-full w-11/12 overflow-hidden rounded-2xl",
          "sm:w-9/12",
          "lg:col-start-1 lg:w-full lg:translate-y-[20%]",
          "2xl:w-[43.75rem]",
          "transition-transform duration-100 ease-out",
          !even && "lg:!col-start-2",
          direction === "-"
            ? "-translate-x-[20%] -rotate-12"
            : "translate-x-[20%] rotate-12",
        )}
      >
        <div aria-label={title} className="relative block h-full w-full">
          <Image
            sizes="(min-width: 1024px) 45vw, (min-width: 640px) 80vw, 100vw"
            src={imageSrc}
            alt={title}
            quality={100}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Текст */}
      <div
        ref={textRef}
        className={cn(
          "mx-auto flex translate-y-1/2 flex-col justify-center text-center",
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
      </div>
    </div>
  );
};

export default ProjectItem;
