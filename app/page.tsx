import Navbar from "@/components/NavBar";
import { Carriere } from "components/Carriere";
import Presentation from "components/Presentation";
import Projets from "components/Projets";
import Technologies from "components/Technologies";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Presentation />
      <Carriere />
      <Technologies />
      <Projets />
      {/* <SectionCard id={"connaissances"} title={"Connaissances"}>
        <Connaissances />
      </SectionCard> */}
    </div>
  );
}
