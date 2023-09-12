import React, { useEffect, useState } from "react";
import Bottle from "./Bottle";
import Cart from "./Cart";
import { addToLocalStorage, getFromLocalStorage } from "./localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (bottles.length > 0) {
      const storedCard = getFromLocalStorage();
      const saveCart = [];
      for (const id of storedCard) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        bottle && saveCart.push(bottle);
      }
      setCart(saveCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const myCart = [...cart, bottle];
    setCart(myCart);
    addToLocalStorage(bottle.id);
  };

  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  };

  return (
    <div>
      <Cart cart={cart} />
      <div style={styles}>
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
