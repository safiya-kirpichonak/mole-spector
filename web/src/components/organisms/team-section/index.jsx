import React from "react";
import SectionTitle from "../../atoms/section-title";

import PersonCard from "../../molecules/person-card";

const TeamSection = ({data}) => {
  return (
    <section id="team" className="developers">
      <div className="container">
        <SectionTitle title="Team" />

        {data.map(({ src, name, position, description }, index) => (
          <PersonCard
            src={src}
            name={name}
            position={position}
            description={description}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
