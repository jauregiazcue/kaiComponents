import Hero, { HeroType } from "@components/Hero/Hero";
import HeroImage from "@assets/Profile.jpg";
import Link, { type LinkPayload, LinkType } from "@components/Links/Link";
import "@style/vars.scss";
import CardGenerator from "./components/CardGenerator/CardGenerator";
import { useState } from "react";
function App() {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    if (!isActive) {
      document.body.classList.remove("dark-mode");
      setActive(!isActive);
      return;
    }

    document.body.classList.add("dark-mode");
    setActive(!isActive);
  };

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
        { onClick: handleToggle, text: "Dark" }
      ]} />
      {/** HERO */}
      <Hero title="Kai Jauregi" url={HeroImage}
        alt="Profile photo of Kai Jauregi" type={HeroType.centerFocus} id="hero">
        <h2> Gameplay & Tools Programmer </h2>
        <h2> Full stack Developer </h2>
        <Link list={data} type={LinkType.simple} />
      </Hero>
      <CardGenerator id="project" />
    </>
  )
}

export default App;