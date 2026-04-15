import type { PropsWithChildren } from "react";
import "./Hero.scss";
import Image from "../Image/Image";

interface MyHeroProps extends PropsWithChildren {
  /** The text to display inside the button */
  title: string;
  url?: string;
  alt?: string;
}

function Hero(payload: MyHeroProps) {
  const { title, url, alt, children } = payload;
  return (
    <section className="hero">
      {url && alt ? <Image url={url} alt={alt} /> : <></>}
      <h1 className="dark">{title}</h1>
      {children}
    </section>


  );
}

export default Hero;