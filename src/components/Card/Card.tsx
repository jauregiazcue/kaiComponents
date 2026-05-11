
import Link, { LinkType, type LinkPayload } from "@components/Links/Link";
import "./Card.scss";


export interface CardPayload {
  /** The text to display inside the button */
  title: string;
  description: string;
  year: string;
  image?: string;
  links: LinkPayload[],
}


function Card(payload: CardPayload) {
  const { title, year, image, description, links } = payload;

  let sectionStyle = {};
  if (image) {
    sectionStyle = {
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  } else {
    sectionStyle = {
      display: "none"
    }
  }
  return <div className="card">
    <div className="card--header" style={sectionStyle} />
    <div className="card--body">
      <div className="card--body--head">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
      <p>{description}</p>
    </div>
    <div className="card--footer">
      <Link list={links}
        type={LinkType.simple} />
    </div>
  </div>;
}

export default Card;