import React from "react";

const TextAreaForm = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="form-control"
      name="message"
      rows="5"
      placeholder="Message"
      required
    ></textarea>
  );
};

export default TextAreaForm;
