import Link from "next/link";
import React from "react";
import { nav } from "@/data/navigation";
import LinkNavigation from "./micro/LinkNavigation";
import Footer from "@/components/footer/page";
import { cookies } from "next/headers";
import ButtonLogout from "./micro/ButtonLogout";
function Navigation({ children }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access-token");

  return (
    <>
      <header className="fixed z-40 right-0 left-0 shadow-md backdrop-blur-md">
        <nav className="flex justify-between px-20 py-3 items-center box-content text-[#1A2349]">
          <Link href={"/"}>
            <h1 className="font-semibold text-xl ">Access Career</h1>
          </Link>
          <div className="flex gap-5 font-medium text-sm items-center">
            {nav.map((item) => (
              <LinkNavigation
                key={item.route}
                route={item.route}
                text={item.text}
                type={item.type}
              />
            ))}
            {!accessToken ? (
              <LinkNavigation route="/login" text="Login" type="normal" />
            ) : (
              <ButtonLogout />
            )}
          </div>
        </nav>
      </header>
      <main className="h-[300vh] bg-bgImage">{children}</main>
      <Footer />
    </>
  );
}

export default Navigation;
