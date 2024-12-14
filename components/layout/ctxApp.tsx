"use client";
import devfools from "devfools";
import { ReactNode, useLayoutEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function CtxApp({ children }: Props) {
  useLayoutEffect(() => {
    devfools("all");
  });
  return (
    <div className="font-cuz relative text-[.9rem] dark:bg-black dark:text-white">
      {children}
    </div>
  );
}
