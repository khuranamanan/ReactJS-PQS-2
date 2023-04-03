// Build a React component called Phones that receives an array of products as a prop. Display only the mobile phones as an unordered list. Display their name, description, and price on the DOM.

export default function Phones({ heading, productArr }) {
  const productArrMapped = productArr
    .filter(({ name }) => name === "mobile")
    .map(({ id, name, description, price }) => (
      <li key={id}>
        <h4>Name: {name}</h4>
        <p>
          Description: {description} <br />
          Price: Rs. {price}
        </p>
      </li>
    ));

  return (
    <>
      <h2>{heading}</h2>
      <ol>{productArrMapped}</ol>
    </>
  );
}
