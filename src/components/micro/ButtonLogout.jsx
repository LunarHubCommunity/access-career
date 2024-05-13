"use client";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";

function ButtonLogout() {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("access-token");
    router.refresh();
  };
  return (
    <button
      className="after:block after:bg-black hover:after:animate-hover-nav
  after:opacity-0 after:h-[2px] after:w-1/3 flex flex-col items-center
   gap-[3px]"
      type="button"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default ButtonLogout;
