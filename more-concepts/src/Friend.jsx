import React from "react";
import "./Friends.css";

const Friend = ({ friend }) => {
  const { name, email } = friend;
  return (
    <div className="box">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;
