import React from "react";

function page() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-primary h-56 text-white px-20 flex flex-col gap-2 py-10">
      <p className="text-2xl font-medium">Access Careers</p>
      <p className="font-extralight text-sm w-[27rem]">
        Mencerminkan pentingnya memberikan akses yang adil dan setara untuk
        individu dengan disabilitas dalam dunia kerja.
      </p>
      <div className="flex justify-center items-center mt-12 ">
        <p>Hak Cipta {currentYear} &copy; AccessCareers</p>
      </div>
    </footer>
  );
}

export default page;
