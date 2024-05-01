import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between px-10 py-5 border-b-4 box-content text-[#1A2349]">
      <Link href={""}>
        <h1 className="font-bold text-[32px]">Access Career</h1>
      </Link>
      <div className="flex gap-5 font-semibold text-[22px] items-center">
        <Link href={""}>Cari Lowongan</Link>
        <Link href={""}>Daftar Perusahaan</Link>
        <Link href={""}>Tips Karir</Link>
        <div className="flex gap-5 items-center">
          <Link
            href={""}
            className="border-[1px] border-black rounded-lg py-2 px-1"
          >
            <p className="flex items-center">Untuk Perusahaan</p>
          </Link>
          <Link href={""}>Login</Link>
        </div>
      </div>
    </nav>
  );
}
