import React from "react";
import ContactLink2 from "../../atoms/contact-link-2";

import SectionTitle from "../../atoms/section-title";
import ContactForm from "../../molecules/contact-form";

const Contact = ({ data }) => {
  return (
    <section id="contact" className="contact">
      <SectionTitle title="Contact" />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              {data.map(({ type, data }, index) => (
                <ContactLink2 type={type} data={data} key={index} />
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
