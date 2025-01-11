// "use client";

// // styles
// import { cn } from "@/utils/cn";

// // utils
// import MagneticEffect from "@/utils/MagneticEffect";
// import { scrollTo } from "@/utils/scrollTo";

// interface ButtonProps {
//   className?: string;
//   as: "button" | "link";
//   variant: "fill" | "ghost";
//   text: string;
// }

// const downloadFile = (url: string, fileName: string) => {
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = fileName;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// const Button = ({ className, text, as, variant }: ButtonProps) => {
//   const handleClick = () => {
//     if (as === "link") {
//       downloadFile("/icons/moon.svg", "moon.svg");
//     }
//     if (as === "button") {
//       scrollTo("footer");
//     }
//   };

//   return (
//     <MagneticEffect distance={20}>
//       <button
//         className={cn(
//           "whitespace-nowrap rounded-full border-2 border-primary px-8 py-3 text-lg font-semibold transition-[transform,_border-color,_background-color] duration-300 hover:transition-[transform,_border-color,_background-color,_color] hover:duration-500 active:scale-90",
//           "sm:py-4 sm:text-xl",
//           "xl:text-2xl",
//           "2xl:px-10 2xl:py-6 2xl:text-3xl",
//           variant === "fill" &&
//             "bg-primary text-black hover:border-black dark:hover:border-white",
//           variant === "ghost" && "hover:bg-primary hover:text-black",
//           className,
//         )}
//         onClick={handleClick}
//       >
//         {text}
//       </button>
//     </MagneticEffect>
//   );
// };

// export default Button;
"use client";

// styles
import { cn } from "@/utils/cn";

// utils
import MagneticEffect from "@/utils/MagneticEffect";

interface ButtonProps {
  className?: string;
  as: "button" | "link";
  variant: "fill" | "ghost";
  text: string;
}

const downloadFile = (url: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Button = ({ className, text, as, variant }: ButtonProps) => {
  if (as === "link") {
    return (
      <MagneticEffect distance={20}>
        <a
          href="https://t.me/kn9jee"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-block whitespace-nowrap rounded-full border-2 border-primary px-8 py-3 text-lg font-semibold transition-[transform,_border-color,_background-color] duration-300 hover:transition-[transform,_border-color,_background-color,_color] hover:duration-500 active:scale-90",
            "sm:py-4 sm:text-xl",
            "xl:text-2xl",
            "2xl:px-10 2xl:py-6 2xl:text-3xl",
            variant === "fill" &&
              "bg-primary text-black hover:border-black dark:hover:border-white",
            variant === "ghost" && "hover:bg-primary hover:text-black",
            className,
          )}
        >
          {text}
        </a>
      </MagneticEffect>
    );
  }

  return (
    <MagneticEffect distance={20}>
      <button
        className={cn(
          "inline-block whitespace-nowrap rounded-full border-2 border-primary px-8 py-3 text-lg font-semibold transition-[transform,_border-color,_background-color] duration-300 hover:transition-[transform,_border-color,_background-color,_color] hover:duration-500 active:scale-90",
          "sm:py-4 sm:text-xl",
          "xl:text-2xl",
          "2xl:px-10 2xl:py-6 2xl:text-3xl",
          variant === "fill" &&
            "bg-primary text-black hover:border-black dark:hover:border-white",
          variant === "ghost" && "hover:bg-primary hover:text-black",
          className,
        )}
        onClick={() => {
          downloadFile(
            "/download/resume.pdf",
            "Татарчук Алексей Сергеевич.pdf",
          );
        }}
      >
        {text}
      </button>
    </MagneticEffect>
  );
};

export default Button;
