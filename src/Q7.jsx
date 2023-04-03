// 7. Build a React component called About that accepts three props: heading, your name and learning. Inside the component, render a `<h1>` tag with the heading prop, `<h2>` tag with your name and a button below that which says “Know More”. On the click of the button, show the learning in a `<p>` tag just below the button.

import { useState } from "react";

//     Data:

//     ```jsx
//     const heading = 'About Me'
//     const name = 'Preeti' // you can put your name
//     const learning = 'I am learning React JS currently at neoG Camp.'
// ```

export default function About({ header, heading, name, learning }) {
  const [displayLearning, setDisplayLearning] = useState(false);

  function handleClick() {
    setDisplayLearning(!displayLearning);
  }

  return (
    <>
      <h2>{header}</h2>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={handleClick}>Know More...</button>
      {displayLearning && <p>{learning}</p>}
    </>
  );
}
