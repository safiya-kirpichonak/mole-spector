import React from "react";

import LogoButton from "../../atoms/logo-button";
import ThemeSwitcher from "../../atoms/theme-switcher";

const NavBar = ({ auth }) => {
  const logoutHandler = async () => {
    localStorage.removeItem("isAuth");
    window.location.href = "/";
  };

  return (
    <header id="header" className="fixed-top">
      {auth ? (
        <div className="container d-flex align-items-center">
          <LogoButton />
          <div style={{ margin: "0 12px 0 12px" }}>
            <a href="/quiz">Quiz</a>
          </div>
          <div style={{ margin: "0 12px 0 12px" }}>
            <a href="/profile">Profile</a>
          </div>
          <div style={{ margin: "0 12px 0 12px" }}>
            <a href="/send-photo">Photo</a>
          </div>
          <div style={{ margin: "0 12px 0 12px" }} onClick={logoutHandler}>
            <a href="#">Logout</a>
          </div>
          <div style={{ margin: "0 12px 0  12px" }}>
            <ThemeSwitcher />
          </div>
        </div>
      ) : (
        <div className="container d-flex align-items-center">
          <LogoButton />
          <div style={{ margin: "0 12px 0 12px" }}>
            <a href="/quiz">Quiz</a>
          </div>
          <div style={{ margin: "0 12px 0  12px" }}>
            <a href="/sign-in">Log in</a>
          </div>
          <div style={{ margin: "0 12px 0  12px" }}>
            <a href="/sign-up">Sign up</a>
          </div>
          <div style={{ margin: "0 12px 0  12px" }}>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
