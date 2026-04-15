import "./Image.scss";

export interface MyImageProps {
  url: string,
  alt: string,
}

function Image(payload: MyImageProps) {
  const { url, alt } = payload;
  return (<img className="image" src={url} alt={alt} />);
}

export default Image;