import React from "react";

const WhiteBlueButton = ({ href, data }) => {
  return (
    <a href={href} className="more-btn">
      {data}
      <i className="bx bx-chevron-right"></i>
    </a>
  );
};

export default WhiteBlueButton;
