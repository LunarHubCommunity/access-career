import React from "react";

function HeadingContent({ children }) {
  return (
    <div className="flex justify-center items-center  ">
      <h1 className="bg-blue-primary font-normal text-2xl flex justify-center items-center text-white h-14 w-[51rem] rounded-2xl mt-24 mb-12 ">
        {children}
      </h1>
    </div>
  );
}

export default HeadingContent;
