import React from "react";

import RoundPicture from "../../atoms/round-picture";

const PersonCard = ({ src, name, position }) => {
  return (
    <div className="mt-4 mt-lg-0">
      <div className="member d-flex align-items-start">
        <RoundPicture src={src} />
        <div className="member-info">
          <h4>{name}</h4>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
