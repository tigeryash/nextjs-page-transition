"use client";

import ReactLenis from "@studio-freight/react-lenis";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const InfoPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      if (!container.current) return;
      const text = new SplitType("#info p", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      if (!text.lines) return;
      text.lines.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      gsap.set("#info p .line span", { y: 400, display: "block" });

      gsap.to("#info p .line span", {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => {
        text.revert();
      };
    },

    { scope: container }
  );
  return (
    <ReactLenis root>
      <div
        ref={container}
        id="info"
        className="w-full h-[100dvh] min-h-screen bg-bg-color flex overflow-hidden"
      >
        <div className="col">
          <Image src="/img1.jpg" alt="1" width={735} height={735} />
        </div>
        <div className="col">
          <p>
            I graduated with a degree in Information Communication Technology
            from University of Kentucky. Afterwards I self taught myself HTML,
            CSS and Javascript through tutorials and small projects and took a
            course from Scrimba for React and Advanced React. I enjoy figuring
            out how to make designs and replicating them. I can use Next.js and
            have some experience with TypeScript. I adapt to new technologies
            quickly and have fun when I know I can implement them into my work.
            I am currently looking for a full time position as a front end web
            developer.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
};

export default InfoPage;
