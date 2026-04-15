import "./Link.scss";

export interface LinkProps {
  href: string,
  text: string,
  [key: string]: unknown
}

function Link(props : {payload: LinkProps[]}) {
  const {payload} = props;
  return (
    <section className="link">
      <>
        {payload.map((link: LinkProps) => {
          const { href, text, ...props } = link;
          return <a href={href} {...props}>{text}</a>
        })}
      </>
    </section>

  );
}

export default Link;