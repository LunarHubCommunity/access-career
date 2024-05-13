"use client";
import InputAuth from "@/components/micro/InputAuth";
import useSnackbar from "@/hooks/useSnackbar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
function Login() {
  const { Snackbar, showSnackbar } = useSnackbar();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const FormElement = event.target;
    const formData = new FormData(FormElement);
    const formDataJson = Object.fromEntries(formData.entries());

    try {
      showSnackbar(true, "Loading...");
      const { data } = await axios.post(
        "https://be-access-career.vercel.app/login",
        formDataJson
      );

      setCookie("access-token", data["access-token"], {
        maxAge: 3600,
      });

      showSnackbar(true, data.message);

      setTimeout(() => {
        showSnackbar(false, null);
        router.replace("/");
      }, 1000);
    } catch (error) {
      showSnackbar(true, error.response.data.message);

      setTimeout(() => {
        showSnackbar(false, null);
      }, 1500);
    }
  };

  return (
    <>
      <Snackbar />
      <main className="flex items-center justify-center min-h-[100vh]">
        <div className="flex flex-wrap max-w-4xl shadow-lg min-h-[70vh]">
          <div className="min-h-[50vh]  bg-topo  bg-blue-primary flex flex-col justify-center px-10 gap-1">
            <h3 className="font-medium text-xl text-white">
              Selamat Datang Kembali Di
            </h3>
            <h2 className="text-3xl font-semibold text-white">AccessCareers</h2>
            <p className="text-sm font-normal text-white max-w-[330px]">
              Mencerminkan pentingnya memberikan akses yang adil dan setara
              untuk individu dengan disabilitas dalam dunia kerja.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white flex gap-2 flex-col items-center justify-center min-w-[410px] px-11"
          >
            <h1 className="font-semibold text-3xl flex text-center leading-tight text-blue-primary">
              Masuk
            </h1>
            <div className="mt-5 mb-4 w-full flex flex-col gap-4">
              <InputAuth
                placeholder="Masukkan Email Anda"
                name="email"
                type="email"
              />
              <InputAuth
                placeholder="Masukkan Password Anda"
                name="password"
                type="password"
              />
            </div>
            <button
              type="submit"
              className="px-10 py-2 bg-blue-primary rounded-md text-sm text-white hover:shadow-md"
            >
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
                className="px-4 py-1  border
              border-blue-primary rounded-lg
            hover:bg-blue-primary hover:border-white hover:shadow-xl"
              >
                <Image
                  width={25}
                  height={25}
                  src="/image/icon-google.png"
                  alt="Google Icon"
                />
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
