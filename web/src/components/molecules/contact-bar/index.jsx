import React from "react";

import ContactLink from "../../atoms/contact-link";

const ContactBar = ({email}) => {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <ContactLink data={email} type={"email"} />
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
