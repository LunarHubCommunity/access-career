import Navigation from "@/components/Navigation";
import CardCareer from "@/components/micro/CardCareer";
import FilterCareer from "@/components/micro/FilterCareer";
import Heading from "@/components/micro/Heading";
import InputSearchCareer from "@/components/micro/InputSearchCareer";

export default function Home() {
  return (
    <Navigation>
      <div className="flex flex-col justify-center items-center mt-[4rem]">
        <Heading>Temukan Lowongan Pekerjaan Sesuai Minat anda</Heading>
        <InputSearchCareer placeholder="cari nama pekerjaan dan/perusahaan" />
      </div>
      <FilterCareer />
      <div className="grid grid-cols-3 grid-rows-3 gap-[63px] px-[93px]">
        <CardCareer />
      </div>
    </Navigation>
  );
}
