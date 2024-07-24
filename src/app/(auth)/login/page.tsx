'use client'
import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

interface IValues {
  email: string | number;
  password: string;
}

export default function Login() {
  const router = useRouter();

  const initialValues: IValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (
    values: IValues,
    { setSubmitting }: FormikHelpers<IValues>
  ) => {
    setTimeout(() => {
      setSubmitting(false);
      router.push("/main");
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
          <div className="w-[75%]">
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

                  <button
                    className="w-full h-[2.25rem] bg-[#0072FFFF] text-white rounded-[8px] mt-2"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Войти
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex flex-row w-[75%] items-center gap-4 mt-5">
            <div className="w-[40%] h-[1px] bg-[#EEEEEFFF]"></div>
            <div className="text-[1.25rem] text-[#737373FF]">или</div>
            <div className="w-[40%] h-[1px] bg-[#EEEEEFFF]"></div>
          </div>
          <Button className="w-[75%] mt-6 flex flex-row bg-transparent text-[#385185FF] hover:bg-transparent">
            <div className="bg-white mr-4">
              <Image
                src="/facebook_icon.png"
                width={20}
                height={20}
                alt="facebook-icon"
              />
            </div>
            Войти через Facebook
          </Button>
        </div>
      </div>
      <div className="w-[24rem] h-[4rem] border-[1px] border-slate-300 mt-4 flex items-center justify-center text-[0.9rem]">
        <div className="flex items-end justify-center gap-1">
          <p>У вас ещё нет аккаунта? </p>
          <Link href="/auth" className="text-[#0072FFFF]">
            {" "}
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}
