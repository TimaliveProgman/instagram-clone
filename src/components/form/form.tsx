import * as React from "react";

export interface IAuthFormProps {}

export default function AuthForm(props: IAuthFormProps) {
  return (
    <div>
      <form action="" className="flex flex-col gap-2 ">
        <input
          className="w-full text-[0.75rem] h-[2.25rem] rounded-[3px] pl-2"
          type="text"
          placeholder="Моб.телефон или эл.адрес"
        />
        <input
          className="w-full text-[0.75rem] h-[2.25rem] rounded-[3px] pl-2"
          type="text"
          placeholder="Имя и фамилия"
        />
        <input
          className="w-full text-[0.75rem] h-[2.25rem] rounded-[3px] pl-2"
          type="text"
          placeholder="Имя пользователя"
        />
        <input
          className="w-full text-[0.75rem] h-[2.25rem] rounded-[3px] pl-2"
          type="password"
          placeholder="Пароль"
        />
        <p className="text-[0.75rem] text-[#737373FF] text-center">
          Люди, которые пользуются нашим сервисом, <br /> могли загрузить вашу
          контактную информацию <br /> в Instagram.{" "}
        </p>
        <p className="text-[0.75rem] text-[#737373FF] text-center">
          Регистрируясь, вы принимаете наши Условия, <br /> Политику
          конфиденциальности и Политику в <br /> отношении файлов cookie{" "}
        </p>

        <button className="w-full h-[2.25rem] bg-[#0072FFFF] text-white rounded-[8px]">Регистрация</button>
      </form >
    </div>
  );
}
