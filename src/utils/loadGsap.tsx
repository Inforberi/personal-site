import type { gsap as GsapCore } from "gsap";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ScrollSmoother } from "gsap/ScrollSmoother";

type GsapExtended = typeof GsapCore & {
  ScrollTrigger: typeof ScrollTrigger;
  ScrollSmoother: typeof ScrollSmoother;
};

let cachedGsap: GsapExtended | null = null;

export const loadGsap = async (): Promise<GsapExtended> => {
  if (cachedGsap) return cachedGsap;

  const [gsapModule, { ScrollTrigger }, { ScrollSmoother }] = await Promise.all(
    [
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("gsap/ScrollSmoother"),
    ],
  );

  const gsap = gsapModule.gsap;

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const gsapTyped = gsap as GsapExtended;

  gsapTyped.ScrollTrigger = ScrollTrigger;
  gsapTyped.ScrollSmoother = ScrollSmoother;

  cachedGsap = gsapTyped;

  return cachedGsap;
};
