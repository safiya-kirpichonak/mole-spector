import React, { useState } from "react";

import "./style.css";
import InputForm from "../../atoms/input-form";
import SubmitButton from "../../atoms/submit-button";
import TextAreaForm from "../../atoms/textarea-form";
import Loading from "../../atoms/loader";
import Captcha from "../../atoms/captcha";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [hideForm, setHideForm] = useState(false);
  const [captcha, setCaptcha] = useState(false);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (email && name && subject && message && captcha) {
      setDisabled(true);
      setLoading(true);
      setHideForm(true);
      const data = new FormData();
      data.append("email", email);
      data.append("name", name);
      data.append("subject", subject);
      data.append("message", message);
      setLoading(false);
      setResult({ isSuccess: true });
    }
  };

  const handlerEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlerNameChange = (event) => {
    setName(event.target.value);
  };

  const handlerSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handlerMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const captchaHandler = () => {
    setCaptcha(!captcha);
  };

  return (
    <div className="col-lg-8 mt-5 mt-lg-0">
      {loading ? (
        <div className="contact-wrapper">
          <Loading />
        </div>
      ) : (
        ""
      )}

      {result ? (
        result.isSuccess ? (
          <div className="contact-wrapper">
            <p>Your message has been successfully delivered.</p>
          </div>
        ) : (
          <div className="contact-wrapper">
            <p>Your message was never delivered.</p>
          </div>
        )
      ) : hideForm ? (
        ""
      ) : (
        <form className="email-form" onSubmit={handlerSubmit}>
          <div className="row">
            <div className="col-md-6 form-group">
              <InputForm
                inputType="name"
                value={name}
                onChange={handlerNameChange}
              />
            </div>

            <div className="col-md-6 form-group">
              <InputForm
                inputType="email"
                value={email}
                onChange={handlerEmailChange}
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <InputForm
              inputType="subject"
              value={subject}
              onChange={handlerSubjectChange}
            />
          </div>

          <div className="form-group mt-3">
            <TextAreaForm value={message} onChange={handlerMessageChange} />
          </div>

          <Captcha onChange={captchaHandler} />

          <SubmitButton data="Send Message" disabled={disabled} />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
