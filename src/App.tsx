import Hero from "@components/Hero/Hero";
import HeroImage from "@assets/Profile.jpg";
import Link, { type LinkPayload, LinkType } from "@components/Links/Link";
import "@style/vars.scss";
import CardGenerator from "./components/CardGenerator/CardGenerator";
function App() {

  const data: LinkPayload[] = [];
  data.push({
    href: "/portfolio/Kai_Jauregi_Full_Stack_en.pdf",
    download: "",
    target: "_blank",
    text: "Download Cv"
  });

  data.push({
    href: "/portfolio/Kai_Jauregi_Full_Stack_en.pdf",
    download: "",
    target: "_blank",
    text: "Download Cv in spanish"
  });

  return (
    <>
    
      {/** NAV BAR */}
      <Link type={LinkType.navbar} list={[
        { href: "#hero", text: "Home" },
        { href: "#project", text: "Projects" },
        { href: "#experience", text: "C" },
        { href: "#contact", text: "D" },
      ]} />
      {/** HERO */}
      <Hero title="Kai Jauregi" url={HeroImage}
        alt="Profile photo of Kai Jauregi" type={2} id="hero">
        <h2> Gameplay & Tools Programmer </h2>
        <h2> Full stack Developer </h2>
        <Link list={data} type={LinkType.simple} />
      </Hero>
      <section id="project">
        <CardGenerator/>
      </section>
    </>
  )
}

export default App;