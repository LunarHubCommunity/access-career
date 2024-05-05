import React from "react";

function Heading({ children }) {
  return (
    <h1 className="font-semibold text-[36px] px-96 mt-24 flex text-center leading-tight text-[#1A2349]">
      {children}
    </h1>
  );
}

export default Heading;
