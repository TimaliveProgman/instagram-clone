"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
} from "../ui/breadcrumb";
import Image from "next/image";
import { Heart, MessageCircle, Send } from "lucide-react";
import CommentInput from "../comment/comment";
import { useCallback } from "react";
export interface IMainTapeProps {}

const MainTape: React.FC = () => {
  const handleCommentSubmit = useCallback((comment: string) => {
    console.log("Новый комментарий:", comment);
  }, []);
  return (
    <div>
      <div className="w-[30rem] m-auto mt-10 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <Avatar className="w-[2.5rem] h-[2.5rem]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-black text-[1rem] font-semi-bold">_timalive_</p>
            <div className="flex flex-row items-center gap-3">
              <div className="w-1 h-1 bg-black rounded-[50px] bg-slate-500"></div>
              <p className="text-slate-500 text-[0.8rem]">1 дн.</p>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[red]">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full h-[38rem] bg-black mt-3 object-cover">
          <img src="" alt="" />
        </div>
        <div className="flex justify-between mt-3 pr-2 items-center">
          <div className="flex flex-row gap-5 items-center">
            <Heart />
            <MessageCircle />
            <Send />
          </div>
          <div>
            <Image src="/save.svg" width={25} height={20} alt="save"></Image>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center mt-2">
            {" "}
            <Avatar className=" w-4 h-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className=" w-4 h-4 ml-[-8px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className=" w-4 h-4 ml-[-8px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className=" font-semibold ml-3 text-[0.9rem]">
              195 отметок "Нравится"
            </p>
          </div>
        </div>
        <div className="text-[0.9rem] flex flex-row gap-2">
          <p className="font-semibold ">timalive </p>
          <p className="font-light"> Описание</p>
        </div>
        <div className="font-normal text-[0.9rem] text-slate-400">
          Посмотреть все коментарии (120)
        </div>
        <CommentInput onSubmit={handleCommentSubmit} />
        <div className="w-full h-[0.5px] bg-slate-600"></div>
      </div>
      <div className="w-[30rem] m-auto mt-10 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <Avatar className="w-[2.5rem] h-[2.5rem]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-black text-[1rem] font-semi-bold">_timalive_</p>
            <div className="flex flex-row items-center gap-3">
              <div className="w-1 h-1 bg-black rounded-[50px] bg-slate-500"></div>
              <p className="text-slate-500 text-[0.8rem]">1 дн.</p>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[red]">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full h-[38rem] bg-black mt-3 object-cover">
          <img src="" alt="" />
        </div>
        <div className="flex justify-between mt-3 pr-2 items-center">
          <div className="flex flex-row gap-5 items-center">
            <Heart />
            <MessageCircle />
            <Send />
          </div>
          <div>
            <Image src="/save.svg" width={25} height={20} alt="save"></Image>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center mt-2">
            {" "}
            <Avatar className=" w-4 h-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className=" w-4 h-4 ml-[-8px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className=" w-4 h-4 ml-[-8px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className=" font-semibold ml-3 text-[0.9rem]">
              195 отметок "Нравится"
            </p>
          </div>
        </div>
        <div className="text-[0.9rem] flex flex-row gap-2">
          <p className="font-semibold ">timalive </p>
          <p className="font-light"> Описание</p>
        </div>
        <div className="font-normal text-[0.9rem] text-slate-400">
          Посмотреть все коментарии (120)
        </div>
        <CommentInput onSubmit={handleCommentSubmit} />
        <div className="w-full h-[0.5px] bg-slate-600"></div>
      </div>
      <div className="w-[30rem] m-auto mt-10 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <Avatar className="w-[2.5rem] h-[2.5rem]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-black text-[1rem] font-semi-bold">_timalive_</p>
            <div className="flex flex-row items-center gap-3">
              <div className="w-1 h-1 bg-black rounded-[50px] bg-slate-500"></div>
              <p className="text-slate-500 text-[0.8rem]">1 дн.</p>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[red]">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full h-[38rem] bg-black mt-3 object-cover">
          <img src="" alt="" />
        </div>
        <div className="flex justify-between mt-3 pr-2 items-center">
          <div className="flex flex-row gap-5 items-center">
            <Heart />
            <MessageCircle />
            <Send />
          </div>
          <div>
            <Image src="/save.svg" width={25} height={20} alt="save"></Image>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center mt-2">
            {" "}
            <Avatar className=" w-4 h-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className=" w-4 h-4 ml-[-8px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className=" w-4 h-4 ml-[-8px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className=" font-semibold ml-3 text-[0.9rem]">
              195 отметок "Нравится"
            </p>
          </div>
        </div>
        <div className="text-[0.9rem] flex flex-row gap-2">
          <p className="font-semibold ">timalive </p>
          <p className="font-light"> Описание</p>
        </div>
        <div className="font-normal text-[0.9rem] text-slate-400">
          Посмотреть все коментарии (120)
        </div>
        <CommentInput onSubmit={handleCommentSubmit} />
        <div className="w-full h-[0.5px] bg-slate-600"></div>
      </div>
    </div>
  );
};

export default MainTape;
