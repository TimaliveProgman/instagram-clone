import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface IStoriesProps {}

export default function Stories(props: IStoriesProps) {
  return (
    <div className="w-[43rem] h-[5rem] m-auto">
      <div className="flex flex-row justify-start items-center gap-8 pt-5">
        <div className="flex flex-col items-center gap-1">
          <Avatar className="w-[3.25rem] h-[3rem]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black text-[0.8rem]">_timalive_</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar className="w-[3.25rem] h-[3rem]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black text-[0.8rem]">_timalive_</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar className="w-[3.25rem] h-[3rem]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black text-[0.8rem]">_timalive_</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar className="w-[3.25rem] h-[3rem]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black text-[0.8rem]">_timalive_</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar className="w-[3.25rem] h-[3rem]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black text-[0.8rem]">_timalive_</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar className="w-[3.25rem] h-[3rem]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black text-[0.8rem]">_timalive_</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar className="w-[3.25rem] h-[3rem]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black text-[0.8rem]">_timalive_</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar className="w-[3.25rem] h-[3rem]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-black text-[0.8rem]">_timalive_</p>
        </div>
      </div>
    </div>
  );
}
