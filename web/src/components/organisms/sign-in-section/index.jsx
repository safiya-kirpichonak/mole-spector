import React, { useState } from "react";

import SectionTitle from "../../atoms/section-title";

const SignInSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handlerEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlerPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const showHadler = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const responce = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (responce.status !== 200) {
      setError("Something went wrong, please, try again.");
    } else {
      window.location.href = "/profile";
    }
  };

  return (
    <section style={{ margin: "100px 0 100px 0" }} className="why-us">
      <SectionTitle title="Log in" />
      <form onSubmit={onSubmit} className="email-form">
        <p className="simple-text" style={{ textAlign: "center" }}>
          {error}
        </p>
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
            Don't have an account? <a href="/sign-up">Regictration here!</a>
          </p>
        </div>
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <p className="simple-text">
          Forgot password? <a href="/#contact">Write us!</a>
          </p>
        </div>
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <button
            type="submit"
            className="appointment-btn scrollto simple-button"
          >
            Sign in
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignInSection;
