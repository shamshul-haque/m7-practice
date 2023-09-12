import React, { useEffect, useState } from "react";

const AddRemove = () => {
  const names = [
    { name: "John", id: 1 },
    { name: "Alice", id: 2 },
    { name: "Bob", id: 3 },
    { name: "Eva", id: 4 },
  ];

  const [data, setData] = useState(names);

  const handleSingleRemove = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const handleRemoveAll = () => {
    setData([]);
  };

  useEffect(() => {}, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="text-center">
          <h1>{item.name}</h1>
          <button
            onClick={() => handleSingleRemove(item.id)}
            className="btn btn-xs btn-success"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex justify-center my-10">
        <button onClick={handleRemoveAll} className="btn btn-primary btn-md">
          Remove All
        </button>
      </div>
    </div>
  );
};

export default AddRemove;
