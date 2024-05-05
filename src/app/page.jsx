"use client";
import Navigation from "@/components/Navigation";
import CardCareer from "@/components/micro/CardCareer";
import FilterCareer from "@/components/micro/FilterCareer";
import Heading from "@/components/micro/Heading";
import InputSearchCareer from "@/components/micro/InputSearchCareer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  AOS.init();
  return (
    <Navigation>
      <div className="flex flex-col justify-center items-center mt-24 mb-12 gap-5">
        <Heading>Temukan Lowongan Pekerjaan Sesuai Minat anda</Heading>
        <InputSearchCareer placeholder="cari nama pekerjaan dan/perusahaan" />
      </div>
      <FilterCareer />
      <div className="grid grid-cols-3 mt-3 grid-rows-3 gap-[63px] px-[93px]">
        <CardCareer />
        <CardCareer />
        <CardCareer />
        <CardCareer />
      </div>
    </Navigation>
  );
}
