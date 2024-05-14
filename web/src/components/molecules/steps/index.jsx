import React from "react";

import "./style.css";
import WhiteBlueCard from "../../atoms/white-blue-card";

const Steps = ({ data }) => {
  return (
    <div id="services" className="services wrapper">
      <div className="container">
        <div className="row">
          {data.map(({ title, description, icon }, index) => (
            <WhiteBlueCard
              title={title}
              description={description}
              icon={icon}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
