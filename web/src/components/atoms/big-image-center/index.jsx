import React from "react";

const BigImageCenter = ({ url }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0 20px 0",
      }}
    >
      <img
        src={url}
        alt="from user"
        style={{ weight: "400px", height: "400px" }}
      />
    </div>
  );
};

export default BigImageCenter;
