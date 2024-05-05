import React from "react";
import { dataCard } from "@/data/card";

function CardCareer() {
  return (
    <button
      type="button"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="100"
    >
      {dataCard.map((item) => (
        <div className="w-[350px] h-[430px] rounded-[2rem] outline outline-2 outline-[#1A2349] shadow-3xl shadow-[#1A2349] text-[#1A2349]  ">
          <div className="flex justify-between pt-5 px-7 ">
            <h3 className="font-bold text-[#1A2349] text-2xl">
              {item.jobName}
            </h3>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2em"
              width="1.7em"
            >
              <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
            </svg>
          </div>
          <div className="px-7 text-left">
            <p>{item.company}</p>
            <p>{item.city}</p>
            <p className="bg-[#1A2349] py-1 px-4 mt-2 w-fit text-white rounded-xl">
              {item.salary}
            </p>
          </div>
          <div className="my-2">
            <div className="flex items-center px-7 gap-3">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" />
              </svg>
              <h4>{item.timeWork}</h4>
            </div>
            <div className="flex items-center px-7 gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 001 1h16a1 1 0 001-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z" />
                <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z" />
              </svg>
              <h4>{item.workplace}</h4>
            </div>
            <div className="flex items-center px-7 gap-3">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M12 3l-4 7h8z" />
                <path d="M20 17 A3 3 0 0 1 17 20 A3 3 0 0 1 14 17 A3 3 0 0 1 20 17 z" />
                <path d="M5 14 H9 A1 1 0 0 1 10 15 V19 A1 1 0 0 1 9 20 H5 A1 1 0 0 1 4 19 V15 A1 1 0 0 1 5 14 z" />
              </svg>
              <h4>{item.typeDisability}</h4>
            </div>
          </div>
          <h4 className="px-7 font-semibold text-left">{item.jobTittle}</h4>
          <div className="px-10 text-left">
            <p>{item.jobDetailsSt}</p>
            <p>{item.jobDetailsNd}</p>
          </div>
        </div>
      ))}
    </button>
  );
}

export default CardCareer;
