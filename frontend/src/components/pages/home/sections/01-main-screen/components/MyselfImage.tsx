"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import Image from "next/image";
import { useState } from "react";

// image
import myPhoto from "/public/home/main-screen/my-photo.png";

interface MyselfImagProps {
  alt: string;
}

const MyselfImage = ({ alt }: MyselfImagProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setLoaded(true);
  };

  return (
    <div
      className={cn(
        "pointer-events-none col-start-1 row-start-1 w-[55vw] max-w-[220px] justify-self-end pt-18",
        "sm500:max-w-[300px] sm500:pt-0",
        "sm:w-[58vw] sm:max-w-[370px] sm:pt-10",
        "lg:col-start-2 lg:w-[35vw] lg:max-w-none lg:pt-0",
        "xl:max-w-[520px]",
        "2xl:max-w-[650px]",
      )}
    >
      <Image
        src={myPhoto}
        alt={alt}
        quality={100}
        className={cn(
          "h-auto w-full transition-opacity duration-1000",
          loaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={handleLoadingComplete}
      />
    </div>
  );
};

export default MyselfImage;
