import React from "react";
import "./index.css";

const ResultDescription = ({ result, description }) => {
  return (
    <div className="container">
      <div>
        <section id="team" className="doctors">
          <div className="section-title">
            <h2>{result} %</h2>
          </div>
          <div className="member">
            <div className="member-info">
              <p className="description-style">{description}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultDescription;
