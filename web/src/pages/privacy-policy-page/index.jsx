import React, { useEffect, useState } from "react";

import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import PrivacyPolicySection from "../../components/organisms/privacy-policy-section";
import { checkIsAuth } from "../../service/checkIsAuth";

import policy from "../../data/policy.json";

const PrivacyPolicyPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      await checkIsAuth(setIsAuth);
    })();
  });

  return (
    <div>
      <Header auth={isAuth} />
      <PrivacyPolicySection
        description={policy.description}
        questions={policy.questions}
      />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
