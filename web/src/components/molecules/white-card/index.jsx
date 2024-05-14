import React from "react";

const WhiteCard = ({ icon, title, description }) => {
  let style;
  switch (icon) {
    case "image":
      style = "bx bx-images";
      break;
    case "cube":
      style = "bx bx-cube-alt";
      break;
    case "receipt":
      style = "bx bx-receipt";
      break;
    default:
      style = "";
  }
  return (
    <div className="col-xl-4 d-flex align-items-stretch">
      <div className="icon-box mt-4 mt-xl-0">
        <i className={style}></i>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhiteCard;
