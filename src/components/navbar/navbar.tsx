import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { CircleUserRound, Compass, Heart, House, MessageCircleMore, Search, SquarePlay, SquarePlus } from "lucide-react";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <>
      <div className="w-[20rem] h-screen bg-white fixed left-0 top-0 border-r-[1px] border-r-slate-300">
        <div className="w-15rem flex pl-3 pt-10 flex-col">
          <Image
            src="/text-inst.png"
            width={100}
            height={10}
            alt="aside-photo"
            className="ml-4"
          ></Image>
          <Button className="justify-start text-[1rem] font-normal text-black bg-transparent p-0 mt-7 hover:bg-gray-100 h-[3rem] pl-4 w-[95%]">
            <House className="mr-2 h-6 w-6" /> Главная
          </Button>
          <Button className="justify-start text-[1rem] font-normal text-black bg-transparent p-0  hover:bg-gray-100 h-[3rem] pl-4 w-[95%]">
            <Search className="mr-2 h-6 w-6" /> Поисковый запрос
          </Button>
          <Button className="justify-start text-[1rem] font-normal text-black bg-transparent p-0 mt-2 hover:bg-gray-100 h-[3rem] pl-4 w-[95%]">
            <Compass className="mr-2 h-6 w-6" /> Интересное
          </Button>
          <Button className="justify-start text-[1rem] font-normal text-black bg-transparent p-0 mt-2 hover:bg-gray-100 h-[3rem] pl-4 w-[95%]">
            <SquarePlay className="mr-2 h-6 w-6" /> Reels
          </Button>
          <Button className="justify-start text-[1rem] font-normal text-black bg-transparent p-0 mt-2 hover:bg-gray-100 h-[3rem] pl-4 w-[95%]">
            <MessageCircleMore  className="mr-2 h-6 w-6" /> Сообщения
          </Button>
          <Button className="justify-start text-[1rem] font-normal text-black bg-transparent p-0 mt-2 hover:bg-gray-100 h-[3rem] pl-4 w-[95%]">
            <Heart className="mr-2 h-6 w-6" /> Уведомления
          </Button>
          <Button className="justify-start text-[1rem] font-normal text-black bg-transparent p-0 mt-2 hover:bg-gray-100 h-[3rem] pl-4 w-[95%]">
            <SquarePlus  className="mr-2 h-6 w-6" /> Создать
          </Button>
          <Button className="justify-start text-[1rem] font-normal text-black bg-transparent p-0 mt-2 hover:bg-gray-100 h-[3rem] pl-4 w-[95%]">
            <CircleUserRound  className="mr-2 h-6 w-6" /> Профиль
          </Button>
        </div>
      </div>
    </>
  );
}
