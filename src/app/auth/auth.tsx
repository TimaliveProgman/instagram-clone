import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import AuthForm from "@/components/form/form";

export default function Auth() {
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="w-[24rem] h-fit border-[1px] border-slate-300">
        <div className="flex flex-col items-center pt-5 pb-8">
          <Image
            src="/text-inst.png"
            width={150}
            height={300}
            alt="text-logo"
          ></Image>
          <div className="w-[20rem]">
            <p className="text-[#737373FF] text-[1rem] flex text-center justify-center">
              Зарегистрируйтесь, чтобы <br /> смотреть фото и видео ваших <br />{" "}
              друзей.
            </p>
            <Button className="w-full mt-8 flex flex-row bg-[#0072FFFF]">
              <div className="bg-white mr-4">
                <Image
                  src="/facebook-icon.svg"
                  width={20}
                  height={20}
                  alt="facebook-icon"
                />
              </div>
              Войти через Facebook
            </Button>
            <div className="flex flex-row w-full items-center gap-4 mt-5">
              <div className="w-[40%] h-[1px] bg-[#EEEEEFFF]"></div>
              <div className="text-[1.25rem] text-[#737373FF]">или</div>
              <div className="w-[40%] h-[1px] bg-[#EEEEEFFF]"></div>
            </div>
            <AuthForm></AuthForm>
          </div>
        </div>
      </div>
    </div>
  );
}
