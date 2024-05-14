import React from "react";

import SectionTitle from "../../atoms/section-title";
import SendPhotoForm from "../send-photo-form";

const SendPhotoSection = ({ setResultHandler }) => {
  return (
    <div>
      <div className="container">
        <section id="services" className="services">
          <div style={{ marginTop: "140px", marginBottom: "100px" }}>
            <SectionTitle
              title="Send a photo"
              description="Download 1 square photo in PNG format. JPEG format is not accepted, also your photo in any case will be automatically cut to square form."
            />
            <SendPhotoForm setResultHandler={setResultHandler} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SendPhotoSection;
