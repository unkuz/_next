import Link from "next/link";
import React from "react";
import VueIcon from "@/assets/svg/vue.svg";
import NuxtIcon from "@/assets/svg/nuxt.svg";
import ReactIcon from "@/assets/svg/react.svg";
import NextIcon from "@/assets/svg/next.svg";
import Tailwind from "@/assets/svg/tailwind.svg";
import Django from "@/assets/svg/django.svg";
import Nodejs from "@/assets/svg/nodejs.svg";
import Socketio from "@/assets/svg/socketio.svg";
import Python from "@/assets/svg/python.svg";
import Mysql from "@/assets/svg/mysql.svg";
import Postgresql from "@/assets/svg/postgresql.svg";
import Mongodb from "@/assets/svg/mongodb.svg";
import Express from "@/assets/svg/express.svg";
import Nestjs from "@/assets/svg/nestjs.svg";
import Lodash from "@/assets/svg/lodash.svg";
import Framerjs from "@/assets/svg/framerjs.svg";
import Jest from "@/assets/svg/jest.svg";
import Datadog from "@/assets/svg/datadog.svg";
import Figma from "@/assets/svg/figma.svg";
import Docker from "@/assets/svg/docker.svg";
import Google_analytics from "@/assets/svg/google_analytics.svg";
import TravisCI from "@/assets/svg/travisCI.svg";
import Pixi from "@/assets/svg/pixi.svg";
import ThreeJS from "@/assets/svg/threejs.svg";
import Gsap from "@/assets/svg/gsap.svg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-[20px] py-[100px] sm:mx-auto sm:w-[500px]">
        <h1 className="text-[1rem] uppercase">&gt;About</h1>
        <div>
          <p className="text-balance text-justify indent-8">
            &gt;Unkuz, also known as Nguyen Ba Cuong, is a creative web
            developer with 2.5+ years of experience working in building website.
            Proficient in HTML, CSS, JavaScript, TypeScript, Python,...: plus
            modern libraries, frameworks. Well-versed in requirements aith an
            in-depth knowledge. I&#39;m currently working in Hanoi as a Software
            Engineering, while also taking on freelance projects that pique my
            interest. Here is the list of technologies that I have experience
            with:
          </p>

          <div className="mt-[10px] flex flex-col gap-[15px] indent-0 ">
            <span>Application and Data</span>
            <div className="flex flex-wrap gap-x-[20px] gap-y-[15px] items-baseline">
              <Link href="https://tailwindcss.com/" target="_blank">
                <Image width={30} src={Tailwind} alt="" />
              </Link>
              <Link href="https://gsap.com/" target="_blank">
                <Image width={30} src={Gsap} alt="" />
              </Link>
              <Link href="https://react.dev/" target="_blank">
                <Image width={30} src={ReactIcon} alt="" />
              </Link>
              <Link href="https://nuxt.com/" target="_blank">
                <Image width={30} src={NuxtIcon} alt="" />
              </Link>
              <Link href="https://nextjs.org/ " target="_blank">
                <Image width={50} src={NextIcon} alt="" />
              </Link>
              <Link href="https://vuejs.org/" target="_blank">
                <Image width={30} src={VueIcon} alt="" />
              </Link>
              <Link href="https://lodash.com/" target="_blank">
                <Image width={30} src={Lodash} alt="" />
              </Link>

              <Link href="https://pixijs.com/" target="_blank">
                <Image width={30} src={Pixi} alt="" />
              </Link>
              <Link href="https://threejs.org/" target="_blank">
                <Image width={30} src={ThreeJS} alt="" />{" "}
              </Link>
              <Link href="https://expressjs.com/" target="_blank">
                <Image width={30} src={Express} alt="" />{" "}
              </Link>
              <Link href="https://nestjs.com/" target="_blank">
                <Image width={30} src={Nestjs} alt="" />
              </Link>
              <Link href="https://www.djangoproject.com/" target="_blank">
                <Image width={50} src={Django} alt="" />{" "}
              </Link>
              <Link href="https://nodejs.org/en/" target="_blank">
                <Image width={50} src={Nodejs} alt="" />{" "}
              </Link>
              <Link href="https://socket.io/" target="_blank">
                <Image width={30} src={Socketio} alt="" />
              </Link>
              <Link href="https://www.python.org/" target="_blank">
                <Image width={30} src={Python} alt="" />
              </Link>
              <Link href="https://www.mongodb.com/" target="_blank">
                <Image width={30} src={Mongodb} alt="" />
              </Link>
              <Link href="https://www.mysql.com/" target="_blank">
                <Image width={30} src={Mysql} alt="" />
              </Link>
              <Link href="https://www.postgresql.org/" target="_blank">
                <Image width={30} src={Postgresql} alt="" />
              </Link>
            </div>
            <span>Utilities</span>
            <div className="flex flex-wrap gap-x-[20px] gap-y-[8px] [&_svg]:text-[30px] items-baseline">
              <Link href="https://www.framer.com/" target="_blank">
                <Image width={30} src={Framerjs} alt="" />
              </Link>
              <Link href="https://jestjs.io/" target="_blank">
                <Image width={30} src={Jest} alt="" />
              </Link>
              <Link href="https://www.figma.com/" target="_blank">
                <Image width={20} src={Figma} alt="" />
              </Link>
            </div>
            <span>DevOps</span>
            <div className="flex flex-wrap gap-x-[20px] gap-y-[8px] [&_svg]:text-[30px]">
              <Link href="https://www.docker.com/" target="_blank">
                <Image width={35} src={Docker} alt="" />
              </Link>
              <Link href="https://www.datadoghq.com/" target="_blank">
                <Image width={60} src={Datadog} alt="" />{" "}
              </Link>
              <Link href="https://analytics.google.com/" target="_blank">
                <Image width={25} src={Google_analytics} alt="" />
              </Link>
              <Link href="https://www.travis-ci.com/" target="_blank">
                <Image width={30} src={TravisCI} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
