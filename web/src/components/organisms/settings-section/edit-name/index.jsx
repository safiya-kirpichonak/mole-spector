import React, { useState } from "react";

const EditName = () => {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");

  const handlerNameChange = (event) => {
    setName(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (name) {
      const data = new FormData();
      data.append("newName", name);
      setResult("Your name was successfully changed!");
      setName("");
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="email-form">
        <p
          className="simple-text"
          style={{
            marginTop: "10px",
            marginButtom: "10px",
            textAlign: "center",
          }}
        >
          {result}
        </p>
        <div className="contact parent">
          <div className="email-form" style={{ width: "60%" }}>
            <input
              value={name}
              onChange={handlerNameChange}
              type="name"
              placeholder="Name"
              className="form-control"
              required
            />
          </div>
        </div>
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <button
            type="submit"
            className="appointment-btn scrollto simple-button"
          >
            Edit name
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditName;
