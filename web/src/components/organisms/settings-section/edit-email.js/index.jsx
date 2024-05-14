import React, { useState } from "react";

import { postEmail } from "../../../../axios/postEmail";
import InputFormEmail from "../../send-photo-form/input-form-email";

const EditEmail = () => {
  const [result, setResult] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handlerEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (newEmail) {
      const data = new FormData();
      data.append("newEmail", newEmail);
      postEmail(data)
        .then((_) => {
          setResult("Your email was successfully changed!");
          setNewEmail("");
        })
        .catch((_) => {
          setResult("Your email wasn't changed.");
          setNewEmail("");
        });
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
        <InputFormEmail value={newEmail} onChange={handlerEmailChange} />
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <button
            type="submit"
            className="appointment-btn scrollto simple-button"
          >
            Edit email
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmail;
