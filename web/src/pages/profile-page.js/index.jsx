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
      let responce = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (responce.status !== 200) {
        window.location.href = "/";
      } else {
        const content = await responce.json();
        setName(content.name);
        setEmail(content.email);
        setHide(false);
      }
      responce = await fetch("http://localhost:8000/api/analyses", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
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
