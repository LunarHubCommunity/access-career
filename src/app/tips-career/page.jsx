import React from "react";
import Navigation from "@/components/Navigation";
import CardTips from "@/components/micro/CardTips";
import HeadingContent from "@/components/micro/HeadingContent";

function page() {
  return (
    <>
      <Navigation>
        <div>
          <HeadingContent>Temukan Tips Untuk karir Anda</HeadingContent>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-[63px] px-[93px]">
          <CardTips />
          <CardTips />
          <CardTips />
          <CardTips />
          <CardTips />
          <CardTips />
        </div>
      </Navigation>
    </>
  );
}

export default page;
