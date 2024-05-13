import React from "react";
import Image from "next/image";

function CardTips() {
  return (
    <>
      <button
        type="button"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100"
      >
        <div className="w-[350px] h-[450px] rounded-[2rem] outline outline-2 outline-[#1A2349] shadow-3xl shadow-[#1A2349] text-[#1A2349] bg-white overflow-hidden relative flex flex-col justify-between pb-12">
          <div className="max-w-full max-h-[185px] overflow-hidden rounded-[2rem] outline outline-2 outline-blue-primary">
            <Image
              className="object-cover object-center"
              src="/image/bg-company.jpg"
              width={400}
              height={400}
              priority
              alt="BG COMPANY"
            />
          </div>
          <div className="text-start  px-5">
            <p className="text-xl font-semibold">
              3 Hal penting saat melamar pekerjaan
            </p>
            <article className="text-base">
              Perkembengan teknologi saat ini sangat mempermudah dalam segala
              hal.contohnya banyak perusahaan yang menerapkan sistem recruitmen
              secara online
            </article>
            <div className="text-sm flex justify-end ">
              <p>19 Maret 2024</p>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}

export default CardTips;
