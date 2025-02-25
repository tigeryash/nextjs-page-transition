"use client";

import ReactLenis from "@studio-freight/react-lenis";
import Image from "next/image";
import React from "react";

const ProjectsPage = () => {
  return (
    <ReactLenis root>
      <div
        id="projects"
        className="w-full h-full min-h-dvh bg-bg-color flex flex-col py-[20em] px-[1em]"
      >
        <div
          id="images"
          className="w-[30%] my-0 mx-auto flex flex-col gap-[2rem]"
        >
          <Image src="/img1.jpg" alt="1" width={500} height={500} />
          <Image src="/img2.jpg" alt="1" width={500} height={500} />
          <Image src="/img3.jpg" alt="1" width={500} height={500} />
          <Image src="/img4.jpg" alt="1" width={500} height={500} />
        </div>
      </div>
    </ReactLenis>
  );
};

export default ProjectsPage;
