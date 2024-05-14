import React from "react";

const WhiteBlueCard = ({ title, description, icon }) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
      <div className="icon-box">
        <div className="icon">
          <i className={"fas " + icon}></i>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhiteBlueCard;
