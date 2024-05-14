import React from "react";

const SubmitButton2 = ({ disabled }) => {
  return (
    <div className="contact parent">
      <div className="email-form" style={{ width: "60%" }}>
        <div className="text-center">
          <button type="submit" disabled={disabled}>
            Send a photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitButton2;
