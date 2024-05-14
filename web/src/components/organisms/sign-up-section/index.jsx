import React, { useState } from "react";

import SectionTitle from "../../atoms/section-title";
import checkPassword from "../../../service/checkPassword";

const SignUpSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handlerNameChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const handlerEmailChange = (event) => {
    setError("");
    setEmail(event.target.value);
  };

  const handlerPasswordChange = (event) => {
    setError("");
    setPassword(event.target.value);
  };

  const showHadler = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await checkPassword(password);
    } catch (error) {
      setError(
        "The password must be at least 8 characters, contain 1 capital letter, 1 lowercase and 1 special character."
      );
      setPassword("");
      return;
    }
    const responce = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    if (responce.status !== 200) {
      setError("Something went wrong, please, try again.");
    } else {
      window.location.href = "/sign-in";
    }
  };

  return (
    <section style={{ margin: "100px 0 100px 0" }} className="why-us">
      <SectionTitle title="Registration" />
      <form onSubmit={onSubmit} className="email-form">
        <p className="simple-text" style={{ textAlign: "center" }}>
          {error}
        </p>
        <div className="contact parent">
          <div className="email-form" style={{ width: "60%" }}>
            <input
              value={name}
              onChange={handlerNameChange}
              type="text"
              placeholder="Name"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="contact parent">
          <div className="email-form" style={{ width: "60%" }}>
            <input
              value={email}
              onChange={handlerEmailChange}
              type="email"
              placeholder="Email"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="contact parent">
          <div className="email-form" style={{ width: "60%" }}>
            <input
              value={password}
              onChange={handlerPasswordChange}
              type={show ? "text" : "password"}
              placeholder="Password"
              className="form-control"
              required
            />
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <button
                className="appointment-btn scrollto simple-button"
                onClick={showHadler}
              >
                Show password{" "}
              </button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <p className="simple-text">
            Already have an account? <a href="/sign-in">Log in!</a>
          </p>
        </div>
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <button
            type="submit"
            className="appointment-btn scrollto simple-button"
          >
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpSection;
