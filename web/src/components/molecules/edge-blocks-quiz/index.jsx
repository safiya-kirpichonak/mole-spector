import React from "react";

const EdgeBlocksQuiz = ({ title, description, buttonTitle, action }) => {
  return (
    <div className="col-lg-4 d-flex align-items-stretch why-us">
      <div className="content">
        <h3 className="text-center">{title}</h3>
        <p className="text-center">{description}</p>
        <div className="text-center">
          <button
            className="more-btn"
            style={{ border: "none" }}
            onClick={action}
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EdgeBlocksQuiz;
