import { clsx } from "clsx";
import { Ref } from "react";

interface Props {
  ref: Ref<HTMLDivElement> | undefined;
  className?: string;
}

export const TransitionSvg = ({ ref, className }: Props) => {
  return (
    <div
      ref={ref}
      className={clsx("[&>svg]:h-screen [&>svg]:w-auto", className)}
    >
      <svg viewBox="0 0 2185 479" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 28.5L64 -1L3 -30L2169.5 -18.5V-1L2105.5 21L2176 58L2110.5 87.5L2176 128L2116 164L2182 198L2124.5 228.5L2182 262L2124.5 305L2182 341L2134 374L2182 406L2148.5 451.5L2182 478.5H3L81 451.5L3 412.5L81 378L3 330L77 291L3 251L77 212L3 171.5L69.5 134L3 93L64 67.5L3 28.5Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
