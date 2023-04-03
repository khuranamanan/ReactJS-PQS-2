// Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000.

export default function Gadgets({ heading, productArr }) {
  const productArrMapped = productArr.map(
    ({ id, name, description, price }) => (
      <li key={id} style={{ border: price > 50000 ? "solid 2px white" : "" }}>
        <h4>Name: {name}</h4>
        <p>
          Description: {description} <br />
          Price: Rs. {price}
        </p>
      </li>
    )
  );

  return (
    <>
      <h2>{heading}</h2>
      <ol>{productArrMapped}</ol>
    </>
  );
}
