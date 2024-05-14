import React from "react";

const BlueCard = ({ title, description }) => {
  return (
    <div className="col-lg-4 d-flex align-items-stretch">
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="text-center"></div>
      </div>
    </div>
  );
};

export default BlueCard;
