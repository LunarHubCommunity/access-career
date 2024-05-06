"use client";
import Navigation from "@/components/Navigation";
import CardCareer from "@/components/micro/CardCareer";
import FilterCareer from "@/components/micro/FilterCareer";
import Heading from "@/components/micro/Heading";
import InputSearchCareer from "@/components/micro/InputSearchCareer";
import { dataCard } from "@/data/card";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  AOS.init();

  const [careers, setCareers] = useState([]);

  const getCareerFromApi = async () => {
    const {
      data: { data },
    } = await axios.get("https://be-access-career.vercel.app/career");
    setCareers(data);
  };
  useEffect(() => {
    getCareerFromApi();
  }, []);
  return (
    <Navigation>
      <div className="flex flex-col justify-center items-center mb-12 gap-5">
        <Heading>Temukan Lowongan Pekerjaan Sesuai Minat anda</Heading>
        <InputSearchCareer placeholder="cari nama pekerjaan dan/perusahaan" />
      </div>
      <FilterCareer />
      <div className="grid grid-cols-3 mt-3 grid-rows-3 gap-[63px] px-[93px]">
        {careers.map((item) => (
          <CardCareer {...item} key={item.id} />
        ))}
      </div>
    </Navigation>
  );
}
