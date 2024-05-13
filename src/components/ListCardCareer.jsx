"use client";
import React, { useEffect, useState } from "react";
import CardCareer from "./micro/CardCareer";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";

function ListCardCareer() {
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
  AOS.init();

  return (
    <div className="grid grid-cols-3 mt-3 grid-rows-3 gap-[63px] px-[93px]">
      {careers.map((item) => (
        <CardCareer {...item} key={item.id} />
      ))}
    </div>
  );
}

export default ListCardCareer;
