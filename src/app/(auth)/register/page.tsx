"use client";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
interface Values {
  email: string | number;
  firstName: string;
  userName: string;
  password: string;
}

export default function Register() {
  const initialValues: Values = {
    email: "",
    firstName: "",
    userName: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    firstName: Yup.string().required("Required"),
    userName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col h-[110svh]">
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
            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {({ isSubmitting }) => (
                  <Form action="" className="flex flex-col gap-2 mt-3">
                    <div>
                      <Field
                        className="w-full text-[0.75rem] h-[2.25rem] rounded-[3px] pl-2"
                        type="text"
                        name="email"
                        placeholder="Моб.телефон или эл.адрес"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div>
                      <Field
                        className="w-full text-[0.75rem] h-[2.25rem] rounded-[3px] pl-2"
                        type="text"
                        name="firstName"
                        placeholder="Имя и фамилия"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div>
                      <Field
                        className="w-full text-[0.75rem] h-[2.25rem] rounded-[3px] pl-2"
                        type="text"
                        name="userName"
                        placeholder="Имя пользователя"
                      />
                      <ErrorMessage
                        name="userName"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div>
                      <Field
                        className="w-full text-[0.75rem] h-[2.25rem] rounded-[3px] pl-2"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <p className="text-[0.75rem] text-[#737373FF] text-center">
                      Люди, которые пользуются нашим сервисом, <br /> могли
                      загрузить вашу контактную информацию <br /> в Instagram.
                    </p>
                    <p className="text-[0.75rem] text-[#737373FF] text-center">
                      Регистрируясь, вы принимаете наши Условия, <br /> Политику
                      конфиденциальности и Политику в <br /> отношении файлов
                      cookie
                    </p>
                    <button
                      className="w-full h-[2.25rem] bg-[#0072FFFF] text-white rounded-[8px]"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Регистрация
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[24rem] h-[3rem] border-[1px] border-slate-300 mt-4 flex items-center justify-center">
        <div className="flex items-end justify-center gap-1">
          <p>Есть аккаунт?</p>
          <Link href="/login" className="text-[#0072FFFF]">
            {" "}
            Вход
          </Link>
        </div>
      </div>
    </div>
  );
}
