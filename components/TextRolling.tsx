import { rmTextNodeHelper } from "@/utils/app";
import gsap from "gsap";
import React, { useRef } from "react";

interface Props {
  text: string;
  height?: number;
}

export const TextRolling = ({ text, height = 15 }: Props) => {
  const el = useRef<HTMLDivElement>(null);

  const onHover = () => {
    rmTextNodeHelper(el.current!.childNodes).forEach((i) => {
      gsap.to(rmTextNodeHelper(i.childNodes), {
        y: "-100%",
        stagger: {
          each: 0.02,
        },
      });
    });
  };

  const onLeave = () => {
    rmTextNodeHelper(el.current!.childNodes).forEach((i) => {
      gsap.to(rmTextNodeHelper(i.childNodes), {
        transform: "translateY(0%)",
        stagger: {
          each: 0.02,
        },
      });
    });
  };
  return (
    <div
      ref={el}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      className="cursor-pointer overflow-hidden"
      style={{
        height: `${height}px`,
        fontSize: `${height}px`,
        lineHeight: `${height}px`,
      }}
    >
      {[1, 2].map((i) => (
        <div key={i} className="flex">
          {text
            .replaceAll(" ", "\xa0")
            .split("")
            .map((j, idx) => (
              <span className="inline-block" key={idx}>
                {j}
              </span>
            ))}
        </div>
      ))}
    </div>
  );
};
