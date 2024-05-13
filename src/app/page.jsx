import ListCardCareer from "@/components/ListCardCareer";
import Navigation from "@/components/Navigation";
import FilterCareer from "@/components/micro/FilterCareer";
import Heading from "@/components/micro/Heading";
import InputSearchCareer from "@/components/micro/InputSearchCareer";

export default function Home() {
  return (
    <>
      <Navigation>
        <div className="flex flex-col justify-center items-center mb-12 gap-5">
          <Heading>Temukan Lowongan Pekerjaan Sesuai Minat anda</Heading>
          <InputSearchCareer placeholder="cari nama pekerjaan dan/perusahaan" />
        </div>
        <FilterCareer />
        <ListCardCareer />
      </Navigation>
    </>
  );
}
