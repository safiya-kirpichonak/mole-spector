import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactSwitch from "react-switch";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const presentTheme = sessionStorage.getItem("theme");
  const [newTheme, setTheme] = useState(presentTheme);

  const changeTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
    const newTheme = presentTheme === "dark" ? "light" : "dark";
    sessionStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ReactSwitch
      onColor="#FFFFFF"
      offColor="#1977cc"
      onChange={changeTheme}
      checked={newTheme === "dark"}
      checkedIcon={
        <i
          className="bi bi-sun-fill"
          style={{ margin: "8px 0 2px 8px", color: "#0079CC" }}
        ></i>
      }
      uncheckedIcon={
        <i
          className="bi bi-moon-fill"
          style={{ margin: "2px 0 2px 8px", color: "white" }}
        ></i>
      }
    />
  );
};

export default ThemeSwitcher;
