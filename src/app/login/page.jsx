import Heading from "@/components/micro/Heading";
import InputAuth from "@/components/micro/InputAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <main className="flex items-center justify-center min-h-[100vh]">
      <div className="flex flex-wrap max-w-4xl shadow-lg min-h-[70vh]">
        <div className="min-h-[50vh]  bg-topo  bg-blue-primary flex flex-col justify-center px-10 gap-1">
          <h3 className="font-medium text-xl text-white">
            Selamat Datang Kembali Di
          </h3>
          <h2 className="text-3xl font-semibold text-white">AccessCareers</h2>
          <p className="text-sm font-normal text-white max-w-[330px]">
            Mencerminkan pentingnya memberikan akses yang adil dan setara untuk
            individu dengan disabilitas dalam dunia kerja.
          </p>
        </div>
        <div className="bg-white flex gap-2 flex-col items-center justify-center min-w-[410px] px-11">
          <h1 className="font-semibold text-3xl flex text-center leading-tight text-blue-primary">
            Masuk
          </h1>
          <div className="mt-5 mb-4 w-full flex flex-col gap-4">
            <InputAuth placeholder="Masukkan Email Anda" />
            <InputAuth placeholder="Masukkan Password Anda" />
          </div>
          <button className="px-10 py-2 bg-blue-primary rounded-md text-sm text-white hover:shadow-md">
            MASUK
          </button>
          <div className="flex gap-1">
            <p className="font-normal text-blue-primary text-xs ">
              Belum punya akun?
            </p>
            <Link
              className="font-bold cursor-pointer text-blue-primary text-xs"
              href="/register"
            >
              Daftar
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[90px] h-[2px] bg-slate-400"></div>
            <p className="text-xs font-normal text-slate-500">
              Atau masuk dengan
            </p>
            <div className="w-[90px] h-[2px] bg-slate-400"></div>
          </div>
          <div className="flex justify-center mt-2 ">
            <button
              className="px-4 py-1 -5  border-2
            border-blue-primary rounded-lg
            hover:bg-blue-primary hover:border-white hover:shadow-xl"
            >
              <Image width={25} height={25} src="/image/icon-google.png" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
