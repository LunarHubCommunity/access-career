"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function LinkNavigation({ type, text, route }) {
  const pathname = usePathname();
  if (type === "normal") {
    return (
      <Link
        href={route}
        className={`after:block after:bg-black  ${
          pathname === route && "after:animate-hover-nav"
        } hover:after:animate-hover-nav
         after:opacity-0 after:h-[2px] after:w-1/3 flex flex-col items-center
          gap-[3px]`}
      >
        {text}
      </Link>
    );
  }
  if (type === "border") {
    return (
      <div className="flex gap-5 items-center">
        <Link
          href={route}
          className="border border-black transition-colors duration-200 hover:bg-blue-primary  hover:text-white 
          hover:shadow-sm rounded-md py-[2px] px-[5px]"
        >
          <p className="flex items-center">{text}</p>
        </Link>
      </div>
    );
  }
  return <Link href={""}>{text}</Link>;
}

export default LinkNavigation;
