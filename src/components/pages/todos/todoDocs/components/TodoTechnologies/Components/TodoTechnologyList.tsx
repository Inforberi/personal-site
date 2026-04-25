// styles
import { cn } from "@/utils/cn";

// components
import TechnologyDocs from "./TodoTechnology";

const technologies = [
  { title: "Next.js 15.1", technology: "nextjs" },
  { title: "Zustand", technology: "zustand" },
  { title: "TypeScript", technology: "typeScript" },
  { title: "Motion", technology: "motion" },
  { title: "LocalStorage", technology: "localStorage" },
  { title: "TailwindCSS", technology: "tailwind" },
];

type TechnologyTypes =
  | "nextjs"
  | "zustand"
  | "typeScript"
  | "motion"
  | "localStorage"
  | "tailwind";

const TodoTechnologyList = () => {
  return (
    <ul
      className={cn(
        "mx-auto grid auto-rows-auto grid-cols-2 items-center justify-center gap-3",
        "sm:grid-cols-3 sm:gap-5",
        "lg:grid-cols-[repeat(3,_220px)] lg:gap-6",
        "xl:grid-cols-[repeat(3,_245px)] xl:gap-7",
        "2xl:grid-cols-[repeat(3,_330px)] 2xl:gap-8",
      )}
    >
      {technologies.map((card, index) => (
        <TechnologyDocs
          technology={card.technology as TechnologyTypes}
          title={card.title}
          key={index}
        />
      ))}
    </ul>
  );
};

export default TodoTechnologyList;
