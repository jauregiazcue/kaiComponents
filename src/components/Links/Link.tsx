import "./Link.scss";

const LinkType = {
  simple : 0,
  navbar : 1,
}

type LinkType = (typeof LinkType)[keyof typeof LinkType];
export {LinkType};

export interface LinksPayload {
  type : LinkType,
  list : LinkPayload[]
}

export interface LinkPayload {
  href: string,
  text: string,
  [key: string]: unknown
}

function Link(payload: LinksPayload) {
  const {type, list} = payload;
  const linksClass : string = type == LinkType.simple ? "link" : "link-a";
  return (
    <div className={linksClass}>
      <>
        {list.map((link: LinkPayload,index : number) => {
          const { href, text, ...props } = link;
          return <a key={index} href={href} {...props}>{text}</a>
        })}
      </>
    </div>

  );
}

export default Link;