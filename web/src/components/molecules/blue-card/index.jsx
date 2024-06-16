import React from "react";

const BlueCard = ({ title, description }) => {
  return (
    <div className="col-lg-4 d-flex align-items-stretch">
      <div className="content">
        <h3 className="text-center" style={{ margin: "80px 0 0 0" }}>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlueCard;
