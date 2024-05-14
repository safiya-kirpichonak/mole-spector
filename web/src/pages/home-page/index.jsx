import React, { useEffect, useState } from "react";

import Contact from "../../components/organisms/contact";
import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import HeroSection from "../../components/organisms/hero-section";
import Intstruction from "../../components/organisms/instruction";
import TeamSection from "../../components/organisms/team-section";

import contacts from "../../data/contacts.json";
import instructions from "../../data/instructions.json";
import team from "../../data/team.json";
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
        <Intstruction data={instructions} />
        <TeamSection data={team} />
        <Contact data={contacts} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
