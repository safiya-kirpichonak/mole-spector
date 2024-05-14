import React from "react";

import SectionTitle from "../../atoms/section-title";
import QuestionsList from "../../molecules/questions-list";

const PrivacyPolicySection = ({description, questions}) => {
  return (
    <section id="faq" className="faq section-bg" style={{ marginTop: "100px" }}>
      <div className="container">
        <SectionTitle title="Privacy Policy" description={description} />
        <QuestionsList questions={questions} />
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
