import React from "react";

const Singer = ({ singer }) => {
  const { name, age } = singer;
  // alternate way of destructure but the receiving perimeter should props
  //   const {
  //     singer: { name, age },
  //   } = props;
  return (
    <div>
      <p>Singer:{name} </p>
      <p>Age:{age}</p>
    </div>
  );
};

export default Singer;
