import React, { useEffect, useState } from "react";

import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import SettingsSection from "../../components/organisms/settings-section";
import AnalysesSection from "../../components/organisms/analysis-section";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hide, setHide] = useState(true);

  useEffect(() => {
    (async () => {
      setName("Default name");
      setEmail("Default email");
      setHide(false);
    })();
  });

  return (
    <div>
      <Header auth={name ? true : false} />
      {hide ? (
        <div></div>
      ) : (
        <div>
          <AnalysesSection />
          <SettingsSection name={name} email={email} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProfilePage;
