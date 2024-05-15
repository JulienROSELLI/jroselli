import Navbar from "@/components/NavBar";
import { Carriere } from "components/Experiences";
import Presentation from "components/Presentation";
import Projets from "components/Projets";
import Technologies from "components/Technologies";

export default function Home() {
  return (
    <>
      <Presentation />
      <Carriere />
      <Technologies />
      <Projets />
      {/* <SectionCard id={"connaissances"} title={"Connaissances"}>
        <Connaissances />
      </SectionCard> */}
    </>
  );
}
