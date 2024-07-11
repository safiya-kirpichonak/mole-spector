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
              description="Download one square photo in JPG/JPEG format. PNG format is not accepted. Your photo will be automatically cropped to a square, so please ensure it is square and as close as possible to the mole, so only it is visible in the photo. The minimum image size is 300x300 px."
            />
            <SendPhotoForm setResultHandler={setResultHandler} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SendPhotoSection;
