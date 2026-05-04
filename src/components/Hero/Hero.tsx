import { type PropsWithChildren } from "react";
import "./Hero.scss";
import Image from "@components/Image/Image";


interface HeroPayload extends PropsWithChildren {
  /** The text to display inside the button */
  title: string;
  url?: string;
  alt?: string;
  background?: string;
  type?: number;
  id: string;
}


function Hero(payload: HeroPayload) {
  const { title, url, alt, background, type, id, children } = payload;
  let sectionStyle = {};
  if (background) {
    sectionStyle = {
      backgroundImage: `url(${background})`
    }
  }
  let actualType = 0;
  if (type) actualType = type;

  switch (actualType) {
    case 0:
      return <section className="hero" id={id} style={sectionStyle}>
        {url && alt ? <Image url={url} alt={alt} /> : <></>}
        <h1 className="dark">{title}</h1>
        {children}
      </section>;
    case 1:
      return <section className="hero-b" id={id} style={sectionStyle}>
        {children}
        <h1>{title}</h1>
      </section>
    case 2:
      return <section className="hero-c" id={id}>
        <section className="hero-c--spotlight">
          {url && alt ? <Image url={url} alt={alt} /> : <></>}
          <h1 className="dark">{title}</h1>
          {children}
        </section>
      </section>;
  }
}

export default Hero;