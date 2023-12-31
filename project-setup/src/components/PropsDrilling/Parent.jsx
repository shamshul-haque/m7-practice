import React from "react";
import Childrens from "./Childrens";

const Parent = ({ value, setValue }) => {
  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h1>Parent Count: {value}</h1>
      <button className="btn btn-success" onClick={handleClick}>
        Add
      </button>
      <Childrens value={value} />
    </div>
  );
};

export default Parent;
