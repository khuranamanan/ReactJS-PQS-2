// Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.

import { useState } from "react";

const title = "React is awesome";
const content = "React is a JavaScript library for building user interfaces.";

export default function Article({ heading, title, content }) {
  const [displayContent, setDisplayContent] = useState(false);

  function handleClick() {
    setDisplayContent(!displayContent);
  }

  return (
    <>
      <h2>{heading}</h2>
      <h1>{title}</h1>
      <button onClick={handleClick}>Know More...</button>
      <br />
      {displayContent && <p>{content}</p>}
    </>
  );
}
