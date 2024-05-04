import React from "react";

function InputSearchCareer({ placeholder }) {
  return (
    <div className="relative text-gray-500 focus-within:text-white">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <div className="p-1 focus:outline-none focus:shadow-outline">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </span>
      <input
        type="search"
        name="q"
        className="w-[700px] h-[55px] py-2 text-sm text-white bg-[#1A2349] rounded-full pl-11 focus:bg-[#1A2349] focus:text-white"
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
}

export default InputSearchCareer;
