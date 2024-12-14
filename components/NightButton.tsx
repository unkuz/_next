import Star from "@/assets/svg/star.svg";
import Image from "next/image";

export const NightButton = () => {
  return (
    <>
      <div className="relative h-[20px] w-[35px] overflow-hidden rounded-[calc(25px/2)] bg-[#34d0ff] dark:bg-[#4e4e4e]">
        <div className="absolute bottom-1/2 left-[2px] aspect-square h-[80%] translate-y-1/2 rounded-[50%] bg-white duration-200 dark:left-[17px]"></div>
        <div className="absolute bottom-[7px] left-[13px] hidden aspect-square h-[60%] rounded-[50%] dark:block dark:bg-[#4e4e4e]"></div>
        <div className="absolute bottom-[12px] right-[5px] aspect-square h-[25%] rounded-[50%] bg-white duration-200 dark:bottom-[15px] dark:right-[20px] dark:h-[0%]"></div>
        <div className="absolute bottom-[8px] right-[10px] aspect-square h-[15%] rounded-[50%] bg-white duration-200 dark:right-[20px] dark:h-[0%]"></div>
        <Image
          src={Star}
          alt=""
          className="absolute -top-[20px] left-[35px] !h-[5px] !w-[5px] fill-white duration-200 dark:left-[5px] dark:top-[3px]"
        />
        <Image
          src={Star}
          alt=""
          className="absolute -top-[20px] left-[35px] !h-[4px] !w-[4px] fill-white duration-200 dark:left-[8px] dark:top-[12px]"
        />
      </div>
    </>
  );
};
