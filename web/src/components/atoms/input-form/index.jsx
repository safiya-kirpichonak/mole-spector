import React from "react";

const InputForm = ({ inputType, value, onChange }) => {
  let type, name, id, placeholder;
  switch (inputType) {
    case "name":
      type = "text";
      name = "name";
      id = "name";
      placeholder = "Name";
      break;
    case "email":
      type = "email";
      name = "email";
      id = "email";
      placeholder = "Email";
      break;
    case "subject":
      type = "text";
      name = "subject";
      id = "subject";
      placeholder = "Subject";
      break;
    default:
      type = "text";
      name = inputType;
      id = inputType;
      placeholder = inputType;
      break;
  }

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="form-control"
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default InputForm;
