import React, { useState } from "react";

import checkPassword from "../../../../service/checkPassword";

const EditPassword = () => {
  const [result, setResult] = useState("");
  const [presentPassword, setPresentNewPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handlerNewPasswordChange = (event) => {
    setResult("");
    setNewPassword(event.target.value);
  };

  const handlerPresentPasswordChange = (event) => {
    setResult("");
    setPresentNewPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (newPassword && presentPassword) {
      try {
        await checkPassword(newPassword);
      } catch (error) {
        setResult(error.details[0].message);
        setPresentNewPassword("");
        setNewPassword("");
        return;
      }
      if (newPassword === presentPassword) {
        setResult("New password must be different from previous.");
        setPresentNewPassword("");
        setNewPassword("");
        return;
      }
      const data = new FormData();
      data.append("oldPassword", presentPassword);
      data.append("newPassword", newPassword);
      setResult("Your password was successfully changed!");
      setPresentNewPassword("");
      setNewPassword("");
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
              value={presentPassword}
              onChange={handlerPresentPasswordChange}
              type="password"
              placeholder="Old password"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="contact parent">
          <div className="email-form" style={{ width: "60%" }}>
            <input
              value={newPassword}
              onChange={handlerNewPasswordChange}
              type="password"
              placeholder="New password"
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
            Edit password
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPassword;
