"use client";

import { useGSAP } from "@gsap/react";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      if (!container.current) return;
      const heroText = new SplitType("#hero", { types: "chars" });

      gsap.set(heroText.chars, { y: 400 });

      gsap.to(heroText.chars, {
        y: 0,
        duration: 1,
        stagger: 0.075,
        ease: "power4.out",
        delay: 1,
      });
    },
    { scope: container }
  );
  return (
    <ReactLenis root>
      <div
        ref={container}
        className="h-dvh w-[100vw] bg-bg-color flex justify-center items-center text-center overflow-hidden "
        //home
      >
        <h1
          id="hero"
          className="w-full  uppercase text-copy text-[20vw]
      leading-[1] tracking-[-.5rem]
      "
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          Yash
        </h1>
      </div>
    </ReactLenis>
  );
}
