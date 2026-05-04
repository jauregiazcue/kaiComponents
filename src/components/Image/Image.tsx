import "./Image.scss";

export interface ImagePayload {
  url: string,
  alt: string,
}

function Image(payload: ImagePayload) {
  const { url, alt } = payload;
  return (<img className="image" src={url} alt={alt} />);
}

export default Image;