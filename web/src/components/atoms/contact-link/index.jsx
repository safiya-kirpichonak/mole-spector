import React from "react";

const ContactLink = ({ data, type }) => {
  let style;
  switch (type) {
    case "phone":
      style = "bi bi-phone";
      break;
    case "email":
      style = "bi bi-envelope";
      break;
    default:
      style = "";
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <i className={style}></i>
      <div id="data">{data}</div>
    </div>
  );
};

export default ContactLink;
