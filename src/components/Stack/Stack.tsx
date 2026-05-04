import { type PropsWithChildren } from "react";
import "./Stack.scss";

interface StackPayload extends PropsWithChildren {
  fullPage?: boolean
}


function Stack(payload: StackPayload) {
  const { fullPage, children } = payload;

  if (fullPage) {
    return <section className="stack-a">
      {children}
    </section>;
  }

  return <div className="stack-b">
    {children}
  </div>;
}

export default Stack;