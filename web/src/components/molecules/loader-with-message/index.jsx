import React from "react";

import "./style";
import Loader from "../../atoms/loader";

const LoaderWithMessage = ({ message }) => {
  return (
    <div className="loading-wrapper">
      <Loader />
      <p className="message">{message}</p>
    </div>
  );
};

export default LoaderWithMessage;
