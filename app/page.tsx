"use client";
import doge_left from "@/assets/img/doge_left.png";
import doge_right from "@/assets/img/doge_right.png";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import { useMouse } from "react-use";

export default function HomePage() {
  const homePageRef = useRef<HTMLDivElement>(null);
  const [dogEyesRight, setDogEyesRight] = useState(true);
  const { docX } = useMouse(homePageRef as RefObject<Element>);

  const setDogEyes = () => {
    const isRight = docX - document.body.clientWidth / 2 >= 0;
    setDogEyesRight(isRight);
  };

  useEffect(setDogEyes, [docX, setDogEyes]);
  return (
    <>
      <div
        className="flex min-h-screen w-full flex-col items-center justify-center gap-[20px] pt-[30px]"
        ref={homePageRef}
      >
        <div className="uppercase">&gt;Side Project</div>
        <Image
          src={dogEyesRight ? doge_right : doge_left}
          alt=""
          className="w-[200px] object-cover sm:w-[170px]"
        />
        <div>Data is updating ...</div>
      </div>
    </>
  );
}
