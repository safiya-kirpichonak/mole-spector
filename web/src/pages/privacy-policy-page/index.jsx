import React from "react";

import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import PrivacyPolicySection from "../../components/organisms/privacy-policy-section";

import policy from "../../data/policy.json";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Header />
      <PrivacyPolicySection
        description={policy.description}
        questions={policy.questions}
      />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
