
import Link, { type LinksPayload } from "@components/Links/Link";
import "./Card.scss";
import type { Payload } from "@/interfaces/payload";


export interface CardPayload extends Payload {
  /** The text to display inside the button */
  title: string;
  description: string;
  year: string;
  image?: string;
  links: LinksPayload,
}


function Card(payload: CardPayload) {
  const { id, title, year, image, description, links } = payload;
  const sectionStyle = image ? {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : {};
  
  return <div id={id} className="card">
    <div className="card--header" style={sectionStyle} />
    <div className="card--body">
      <div className="card--body--head">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
      <p>{description}</p>
    </div>
    <div className="card--footer">
      <Link list={links.list}
        type={links.type} />
    </div>
  </div>;
}

export default Card;