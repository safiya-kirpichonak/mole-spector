import React from "react";

const TextCard = ({ title, description }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default TextCard;
