import { NightButton } from "@/components/NightButton";
import { navigation } from "@/utils/app";
import clsx from "clsx";
import { isEqual } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TextRolling } from "../TextRolling";
import { useGlobalStore } from "@/store/global";
import logo from "@/assets/img/logo.png";
import Image from "next/image";

export const Header = () => {
  const pathName = usePathname();
  const globalStore = useGlobalStore();

  const magicName = (selectedPath: string, routePath: string, name: string) =>
    isEqual(selectedPath, routePath) ? ">" + name : name;

  return (
    <>
      <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-[#fdfdfd0e] px-[20px] dark:bg-black backdrop-blur-[5px] sm:px-[100px] sm:pt-[50px]">
        <div
          title="Unkuz"
          className="flex items-center gap-[10px] py-[20px] font-au sm:py-0"
        >
          <Link href="/" replace>
            <Image
              src={logo}
              alt=""
              className="!mb-[0px] !h-auto !w-[35px] dark:invert"
            />
          </Link>
        </div>
        <div className="flex gap-[20px] [&>div]:hover:cursor-pointer">
          <div onClick={globalStore.toogleDark}>
            <NightButton />
          </div>
          {navigation.map((i, idx) => (
            <Link href={i.path} key={idx} className="last:md:block" replace>
              <div
                className={clsx("uppercase", {
                  "text-[#34d0ff]": pathName === i.path,
                })}
              >
                <TextRolling text={magicName(pathName, i.path, i.name)} />
              </div>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};
