import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h4>Listed Cart: {cart.length}</h4>
      <div>
        {cart.map((bottle, index) => (
          <div key={index}>
            <img
              src={bottle.img}
              alt={bottle.name}
              style={{ width: "100px", margin: "10px" }}
            ></img>
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
