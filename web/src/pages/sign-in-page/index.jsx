import React, { useState, useEffect } from "react";

import Header from "../../components/organisms/header";
import Footer from "../../components/organisms/footer";
import SignInSection from "../../components/organisms/sign-in-section";
import { checkIsAuth } from "../../service/checkIsAuth";

const SignInPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      await checkIsAuth(setIsAuth);
    })();
  });

  return (
    <div>
      <Header auth={isAuth} />
      <SignInSection />
      <Footer />
    </div>
  );
};

export default SignInPage;
