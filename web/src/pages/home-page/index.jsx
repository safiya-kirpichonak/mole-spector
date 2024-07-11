import React from "react";

import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import HeroSection from "../../components/organisms/hero-section";
import Instruction from "../../components/organisms/instruction";

import instructions from "../../data/instructions.json";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <main id="main">
        <Instruction data={instructions} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
