import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0 20px 0",
      }}
    >
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
      />
    </div>
  );
};

export default Captcha;
