import React from "react";

const Bottle = ({ bottle }) => {
  console.log(bottle);
  const { name, img, price } = bottle;
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "15px",
        margin: "15px",
        borderRadius: "15px",
      }}
    >
      <h3>Name: {name}</h3>
      <p>Price: {price}</p>
      <img
        src={img}
        alt={name}
        style={{
          height: "200px",
          objectFit: "fill",
        }}
      />
    </div>
  );
};

export default Bottle;
