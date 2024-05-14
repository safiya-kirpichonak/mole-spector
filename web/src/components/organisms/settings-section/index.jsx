import React from "react";

import EditName from "./edit-name";
import EditEmail from "./edit-email";
import EditPassword from "./edit-password";
import SectionTitle from "../../atoms/section-title";

const SettingsSection = ({ name, email }) => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <SectionTitle
          title="Settings"
          description="Here you can edit our account settings."
        />
        <p className="simple-text" style={{ textAlign: "center" }}>
          Name: {String(name)}
        </p>
        <EditName />
        <p className="simple-text" style={{ textAlign: "center", marginTop: "20px" }}>
          Email: {String(email)}
        </p>
        <EditEmail />
        <EditPassword />
      </div>
    </section>
  );
};

export default SettingsSection;
