import React from "react";

const ContactLink2 = ({ data, type }) => {
  let style;
  let title;
  switch (type) {
    case "phone":
      style = "bi bi-phone";
      title = "Phone:";
      break;
    case "email":
      style = "bi bi-envelope";
      title = "Email:";
      break;
    default:
      style = "";
      title = "";
  }
  return (
    <div className={type}>
      <i className={style}></i>
      <h4>{title}</h4>
      <p>{data}</p>
    </div>
  );
};

export default ContactLink2;
