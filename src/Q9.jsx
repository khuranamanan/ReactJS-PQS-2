// Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.

import React, { useState } from "react";

export default function ColorPicker({ heading, colorsArr }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const colorButtonsMapped = colorsArr.map((color) => (
    <div key={color.name}>
      <button
        style={{ backgroundColor: color.code }}
        onClick={() => handleColorClick(color.code)}
      >
        {color.name}
      </button>
      {selectedColor === color.code ? (
        <p style={{ height: "1rem" }}>{color.code}</p>
      ) : (
        <p style={{ height: "1rem" }}></p>
      )}
    </div>
  ));

  const handleColorClick = (code) => {
    setSelectedColor(code);
  };

  return (
    <>
      <h2>{heading}</h2>
      <div>
        <h2>Select a color:</h2>
        <div>{colorButtonsMapped}</div>
      </div>
    </>
  );
}
