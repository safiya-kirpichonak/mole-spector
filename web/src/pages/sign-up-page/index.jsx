import React, { useState, useEffect } from "react";

import Header from "../../components/organisms/header";
import Footer from "../../components/organisms/footer";
import SignUpSection from "../../components/organisms/sign-up-section";
import { checkIsAuth } from "../../service/checkIsAuth";

const SignUpPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      await checkIsAuth(setIsAuth);
    })();
  });

  return (
    <div>
      <Header auth={isAuth} />
      <Header />
      <SignUpSection />
      <Footer />
    </div>
  );
};

export default SignUpPage;
