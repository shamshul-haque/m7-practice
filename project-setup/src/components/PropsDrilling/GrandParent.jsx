import React, { useState } from "react";
import Parent from "./Parent";

const GrandParent = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Grand Parent: {value}</h1>
      <Parent value={value} setValue={setValue} />
    </div>
  );
};

export default GrandParent;
