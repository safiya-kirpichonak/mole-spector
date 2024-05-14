import React from "react";

import BlueCard from "../../molecules/blue-card";
import WhiteCard from "../../molecules/white-card";

const Intstruction = ({ data }) => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <BlueCard
            title="How does SkinCancerStop work?"
            description="You can help us train our neural network. By processing photos,
                our neural network is learning to produce more accurate results."
          />

          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                {data.map(({ icon, title, description }, index) => (
                  <WhiteCard
                    icon={icon}
                    title={title}
                    description={description}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intstruction;
