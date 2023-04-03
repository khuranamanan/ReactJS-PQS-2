// 2. Build a Product component that receives product name and price as props and displays them on DOM.
//     - The name should be in bold and blue in color
//     - Price should be in italics and green in color

export default function ProductComp({ heading, productName, price }) {
  return (
    <>
      <h2>{heading}</h2>
      <h4>
        Product Name:{" "}
        <span style={{ color: "blue", fontWeight: "bold" }}>{productName}</span>
      </h4>
      <p>
        Price:{" "}
        <span style={{ color: "green", fontStyle: "italic" }}>{price}</span>
      </p>
    </>
  );
}
