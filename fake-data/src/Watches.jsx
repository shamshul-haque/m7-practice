import { useEffect, useState } from "react";
import Watch from "./Watch";

const Watches = () => {
  // load data in a local way
  /*   const watches = [
    {
      id: 1,
      name: "Rolex",
      price: 10000,
    },
    {
      id: 2,
      name: "Omega",
      price: 8000,
    },
    {
      id: 3,
      name: "Tag Heuer",
      price: 6000,
    },
    {
      id: 4,
      name: "Seiko",
      price: 500,
    },
    {
      id: 5,
      name: "Patek Philippe",
      price: 15000,
    },
  ]; */

  // json way to load data
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("watches.json");
      const data = await res.json();
      setWatches(data);
    };
    loadData();
  }, []);

  return (
    <div>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch} />
      ))}
    </div>
  );
};

export default Watches;
