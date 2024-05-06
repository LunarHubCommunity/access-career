import FilterIcon from "@/icons/FilterIcon";
import React from "react";

function FilterCareer() {
  return (
    <div className="flex justify-between px-[93px] mb-8">
      <FilterIcon />
      <button className="bg-[#1A2349] text-white px-5 py-1 rounded-xl">
        Tersimpan
      </button>
    </div>
  );
}

export default FilterCareer;
