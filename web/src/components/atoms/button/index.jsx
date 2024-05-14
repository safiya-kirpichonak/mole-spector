import React from "react";

import "./style.css";

const Button = ({ action, title, disabled }) => {
  return (
    <button
      className="appointment-btn scrollto simple-button"
      onClick={action}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
