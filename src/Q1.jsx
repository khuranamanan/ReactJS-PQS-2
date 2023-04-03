// Create a React component called Greeting that receives a name prop and displays a message like "Hello, name!" on the DOM.

export default function Greeting({ heading, name }) {
  return (
    <>
      <h2>{heading}</h2>
      <p>Hello, {name}</p>
    </>
  );
}
