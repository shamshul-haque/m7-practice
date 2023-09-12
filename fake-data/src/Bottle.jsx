import React from "react";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "15px",
        margin: "15px",
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <h3>Name: {name}</h3>
      <img
        src={img}
        alt={name}
        style={{
          height: "200px",
          borderRadius: "15px",
        }}
      />
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Add to Cart</button>
    </div>
  );
};

export default Bottle;
