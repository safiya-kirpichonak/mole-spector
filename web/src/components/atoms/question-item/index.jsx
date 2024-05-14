import React from "react";

const QestionItem = ({ title, description, index }) => {
  return (
    <li data-aos="fade-up">
      <i className="bx bx-help-circle icon-help"></i>{" "}
      <a
        data-bs-toggle="collapse"
        className="collapse collapsed"
        data-bs-target={"#faq-list-" + index}
        aria-expanded="false"
        href="/"
      >
        {title} <i className="bx bx-chevron-down icon-show"></i>
        <i className="bx bx-chevron-up icon-close"></i>
      </a>
      <div id={"faq-list-" + index} className="collapse" data-bs-parent=".faq-list">
        <p>{description}</p>
      </div>
    </li>
  );
};

export default QestionItem;
