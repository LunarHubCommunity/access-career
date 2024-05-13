import React from "react";
import Image from "next/image";

function CardCompany() {
  return (
    <button
      type="button"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="100"
    >
      <div className="w-[350px] h-[370px] rounded-[2rem] outline outline-2 outline-[#1A2349] shadow-3xl shadow-[#1A2349] text-[#1A2349] bg-white overflow-hidden relative flex flex-col justify-between pb-12">
        <div className="bg-purple-700 w-20 h-20 rounded-full absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] flex justify-center items-center p-12">
          <p className="text-3xl font-semibold relative">PKD</p>
        </div>
        <div className="max-w-full max-h-[185px] overflow-hidden rounded-[2rem] outline outline-2 outline-blue-primary">
          <Image
            className="object-cover object-center"
            src="/image/bg-company.jpg"
            width={400}
            height={400}
            alt="BG COMPANY"
            priority
          />
        </div>
        <div className="text-start indent-7">
          <p className="text-3xl font-semibold">Penaku.id</p>
          <p className="text-xl">Solo</p>
        </div>
      </div>
    </button>
  );
}
export default CardCompany;
