"use client";

// styles
import { cn } from "@/utils/cn";

// utils
import MagneticEffect from "@/utils/MagneticEffect";
import { scrollTo } from "@/utils/scrollTo";

interface StackButtonMS {
  button: string;
}

const StackButtonMS = ({ button }: StackButtonMS) => {
  return (
    <MagneticEffect>
      <button
        onClick={() => scrollTo("stack")}
        className={cn(
          "group inline-block whitespace-nowrap rounded-xl border border-primary px-7 py-2 text-base font-medium transition-[transform,_background-color] duration-500 hover:bg-primary active:scale-90",
          "sm:rounded-2xl sm:px-10 sm:py-3 sm:text-xl",
          "lg:border-2",
          "xl:rounded-3xl xl:px-12 xl:text-3xl",
          "2xl:rounded-4xl 2xl:px-20 2xl:py-5 2xl:text-4xl",
        )}
      >
        <span className="group-hover:text-black group-hover:transition-colors group-hover:duration-300">
          {button}
        </span>
      </button>
    </MagneticEffect>
  );
};

export default StackButtonMS;
