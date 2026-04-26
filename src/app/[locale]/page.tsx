// styles
import { cn } from "@/utils/cn";

// components
import MainScreen from "@/components/pages/home/sections/01-main-screen/MainScreen";
import About from "@/components/pages/home/sections/02-about/About";
import Projects from "@/components/pages/home/sections/04-projects/Projects";
import Stack from "@/components/pages/home/sections/03-stack/Stack";
import Experience from "@/components/pages/home/sections/05-experience/Experience";

// next intl
import { setRequestLocale } from "next-intl/server";

// types
import { Params } from "../../types/types";

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className={cn("grid gap-20", "sm:gap-32", "lg:gap-36", "2xl:gap-48")}>
      <MainScreen />
      <About />
      <Stack />
      <Projects />
      <Experience />
    </div>
  );
}
