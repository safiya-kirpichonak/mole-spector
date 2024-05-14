import React from "react";

const InputFormEmail = ({ value, onChange }) => {
  return (
    <div className="contact parent">
      <div className="email-form" style={{ width: "60%" }}>
        <input
          value={value}
          onChange={onChange}
          type="email"
          placeholder="Email"
          className="form-control"
          required
        />
      </div>
    </div>
  );
};

export default InputFormEmail;
