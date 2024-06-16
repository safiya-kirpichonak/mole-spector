import React, { useEffect, useState } from "react";

import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import HeroSection from "../../components/organisms/hero-section";
import Instruction from "../../components/organisms/instruction";

import instructions from "../../data/instructions.json";
import { checkIsAuth } from "../../service/checkIsAuth";

const HomePage = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      await checkIsAuth(setIsAuth);
    })();
  });

  return (
    <div>
      <Header auth={isAuth} />
      <HeroSection />
      <main id="main">
        <Instruction data={instructions} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
