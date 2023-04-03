// Build a React component called MyGadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Create a button below all the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen backgroundColor to the items which has a price more than 50000.

import { useState } from "react";

export default function MyGadgets({ heading, productArr }) {
  const [displayExpensiveProducts, setDisplayExpensiveProducts] =
    useState(false);

  const productArrMapped = productArr.map(
    ({ id, name, description, price }) => (
      <li key={id}>
        <div
          style={{
            backgroundColor:
              displayExpensiveProducts && price > 50000 ? "lightgreen" : "",
            color:
              displayExpensiveProducts && price > 50000 ? "black" : "white",
          }}
        >
          <h4>Name: {name}</h4>
          <p>
            Description: {description} <br />
            Price: Rs. {price}
          </p>
        </div>
      </li>
    )
  );

  function handleClick() {
    setDisplayExpensiveProducts(!displayExpensiveProducts);
  }

  return (
    <>
      <h2>{heading}</h2>
      <ol>{productArrMapped}</ol>
      <button onClick={handleClick}>Highlight Expensive Products</button>
    </>
  );
}
