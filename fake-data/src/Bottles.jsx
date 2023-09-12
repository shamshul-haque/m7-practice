import React, { useEffect, useState } from "react";
import Bottle from "./Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };
    loadData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {bottles.map((bottle) => (
        <Bottle key={bottle.id} bottle={bottle} />
      ))}
    </div>
  );
};

export default Bottles;
