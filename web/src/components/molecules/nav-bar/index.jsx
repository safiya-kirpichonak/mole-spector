import React from "react";

import LogoButton from "../../atoms/logo-button";
import ThemeSwitcher from "../../atoms/theme-switcher";

const NavBar = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <LogoButton />
        <div style={{ margin: "0 12px 0 12px" }}>
          <a href="/quiz">Quiz</a>
        </div>
        <div style={{ margin: "0 12px 0 12px" }}>
          <a href="/send-photo">Photo</a>
        </div>
        <div style={{ margin: "0 12px 0  12px" }}>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
