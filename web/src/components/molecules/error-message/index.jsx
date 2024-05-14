import React from "react";

import "./index.css";

const ErrorMessage = ({ code, message }) => {
  return (
    <div className="error-size">
      <h1 className="error-title">{code}</h1>
      <p>{message}</p>
      <img src="" alt="" />
    </div>
  );
};

export default ErrorMessage;
