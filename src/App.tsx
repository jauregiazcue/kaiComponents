import Hero from "./components/Hero/Hero";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import HeroImage from "./assets/Profile.jpg";
import Link, { type LinkProps } from "./components/Links/Link";

function App() {

  const data: LinkProps[] = [];
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
      <Hero title="Kai Jauregi" url={HeroImage} alt="Profile photo of Kai Jauregi">
        <h2>
          Gameplay & Tools Programmer

        </h2>
        <h2>
          Full stack Developer
        </h2>

        <Link payload={data} />
        <DarkModeToggle />
      </Hero>
    </>
  )
}

export default App;
