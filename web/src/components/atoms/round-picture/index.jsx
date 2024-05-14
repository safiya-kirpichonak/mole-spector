import React from "react";

const RoundPicture = ({ src }) => {
  return (
    <div className="pic">
      <img src={src} className="img-fluid" alt={src}/>
    </div>
  );
};

export default RoundPicture;
