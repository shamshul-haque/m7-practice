import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h4>Listed Cart: {cart.length}</h4>
      <div>
        {cart.map((bottle, index) => (
          <img
            key={index}
            src={bottle.img}
            alt={bottle.name}
            style={{ width: "100px", margin: "10px" }}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Cart;
