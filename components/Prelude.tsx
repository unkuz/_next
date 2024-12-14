import { Ref } from "react";

interface Props {
  ref: Ref<HTMLDivElement> | undefined;
}
export const Prelude = ({ ref }: Props) => {
  return (
    <div
      ref={ref}
      className="h-screen w-screen justify-center items-center flex"
    >
      <span className="font-au text-[2.5rem] uppercase tracking-widest">
        unkuz
      </span>
    </div>
  );
};
