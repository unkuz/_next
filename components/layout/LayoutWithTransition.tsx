"use client";
import { Prelude } from "@/components/Prelude";
import { TransitionSvg } from "@/components/transition/TransitionSvg";
import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";
import { Header } from "./Header";
import { useSyncDarkMode } from "@/hooks/syncDarkMode";
import { Miracle } from "./Miracle";

interface Props {
  children: ReactNode;
}

export const LayoutWithTransition = ({ children }: Props) => {
  const svgRef = useRef(null);
  const mainContentRef = useRef(null);
  const preRef = useRef(null);

  useSyncDarkMode();

  useEffect(() => {
    const tl = gsap.timeline({});

    setTimeout(() => {
      tl.set(svgRef.current, {
        translateX: "100%",
      })
        .set(preRef.current, {
          display: "flex",
        })
        .set(mainContentRef.current, {
          display: "none",
        })
        .to(svgRef.current, {
          translateX: "0%",
          duration: 0.5,
          ease: "linear",
        })
        .set(preRef.current, {
          display: "none",
        })
        .set(mainContentRef.current, {
          display: "block",
        })
        .to(svgRef.current, {
          translateX: "-100%",
          duration: 0.5,
          ease: "linear",
        });
    }, 2_500);
  });
  return (
    <div>
      <Prelude ref={preRef} />
      <TransitionSvg
        ref={svgRef}
        className="fixed left-0 top-0 z-[60] translate-x-[150%]"
      />

      <div
        ref={mainContentRef}
        className="mx-auto hidden w-full px-[20px] md:px-0"
      >
        <Header />
        <div className="mx-auto sm:w-[700px]">{children}</div>
        <div className="fixed bottom-[20px] right-1/2 translate-x-1/2 sm:bottom-[50px] sm:right-[100px] sm:translate-x-0">
          {/* <Miracle /> */}
        </div>
      </div>
    </div>
  );
};
