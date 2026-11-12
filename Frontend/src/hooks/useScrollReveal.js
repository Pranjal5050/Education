
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function useScrollReveal() {
  const container = useRef(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(
        "[data-reveal]",
        container.current
      );

      elements.forEach((element) => {
        const direction = element.dataset.reveal || "up";

        const positions = {
          left: { x: -70, y: 0 },
          right: { x: 70, y: 0 },
          up: { x: 0, y: 45 },
          down: { x: 0, y: -45 },
        };

        gsap.from(element, {
          ...positions[direction],
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: container }
  );

  return container;
}