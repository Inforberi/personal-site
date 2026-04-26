import { ScrollSmoother } from "gsap/ScrollSmoother";

export const scrollTo = (elementId: string) => {
  const smoother = ScrollSmoother.get();

  if (smoother) {
    smoother.scrollTo(`#${elementId}`, true, "top top");
    return;
  }

  const element = document.getElementById(elementId);

  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};
