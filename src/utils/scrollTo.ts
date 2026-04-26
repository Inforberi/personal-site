import { ScrollSmoother } from "gsap/ScrollSmoother";

export const scrollTo = (elementId: string) => {
  const smoother = ScrollSmoother.get();

  if (smoother) {
    smoother.scrollTo(`#${elementId}`, true, "top top");
  }
};
