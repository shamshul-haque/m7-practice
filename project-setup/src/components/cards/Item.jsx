import React from "react";
import Image from "./Image";
import Title from "./Title";
import Views from "./Views";

const Item = () => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <Image />
        <Views />
        <Title />
      </div>
    </div>
  );
};

export default Item;
