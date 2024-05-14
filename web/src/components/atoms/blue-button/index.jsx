import React from "react";

const BlueButton = ({ href, long, short }) => {
  return (
    <a href={href} className="appointment-btn scrollto">
      <span className="d-none d-md-inline">{long}</span>
      {short}
    </a>
  );
};

export default BlueButton;
