import React from "react";
import Github_invert from "@/assets/svg/github_invert.svg";
import Instagram_invert from "@/assets/svg/instagram_invert.svg";
import Youtube_Icon from "@/assets/svg/youtube.svg";
import Link from "next/link";
import Image from "next/image";
export default function ContactPage() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center pt-[30px]">
        <h1 className="text-[1rem] uppercase">&gt;Contact</h1>
        <div className="mt-[20px] flex flex-col">
          <a className="text-center" href="mailto:hi.unkuz@gmail.com">
            hi.unkuz@gmail.com
          </a>
          <a className="text-center" href="tel:+84888388859">
            +84 888388859
          </a>
        </div>
        <div className="mt-[10px] flex gap-[20px]">
          <Link href="https://github.com/unkuz" title="Github" target="_blank">
            <Image
              src={Github_invert}
              alt=""
              width={17}
              className="dark:invert"
            />
          </Link>
          <Link
            href="https://www.instagram.com/unkuz"
            title="Instagram"
            target="_blank"
          >
            <Image
              src={Instagram_invert}
              alt=""
              width={17}
              className="dark:invert"
            />
          </Link>

          <Link
            href="https://www.youtube.com/@unkuz."
            title="Youtube"
            target="_blank"
          >
            <Image
              src={Youtube_Icon}
              alt=""
              width={17}
              className="dark:invert"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
