import Navigation from "@/components/Navigation";
import CardCompany from "@/components/micro/CardCompany";
import HeadingContent from "@/components/micro/HeadingContent";
import React from "react";

function page() {
  return (
    <Navigation>
      <div>
        <HeadingContent>Mitra Kerjasama</HeadingContent>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-[63px] px-[93px]">
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
        <CardCompany />
      </div>
    </Navigation>
  );
}

export default page;
