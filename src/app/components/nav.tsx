"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const router = useTransitionRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(e.currentTarget.href, {
      onTransitionReady: slideInOut,
    });
  };

  const slideInOut = () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <nav
      id="nav"
      className=" fixed top-0 left-0 w-[100vw] p-[1.75rem] z-50 flex justify-between items-center"
    >
      <div id="logo" className="">
        <div id="link" className="links">
          <Link onClick={(e) => handleClick(e)} href="/">
            Index
          </Link>
        </div>
      </div>
      <div id="links" className="flex gap-[2rem]">
        <div id="link" className="">
          <a onClick={(e) => handleClick(e)} href="/info">
            Info
          </a>
        </div>
        <div id="link" className="">
          <a onClick={(e) => handleClick(e)} href="/projects">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
