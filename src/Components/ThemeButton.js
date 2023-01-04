import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeButton = ({ label, themeClassName }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  function handleClick() {
    changeTheme(themeClassName);
    console.log("Theme Class Name:" + themeClassName);
    console.log("Current Theme: " + theme);
  }

  return (
    <div>
      <button className="my-5 p-8 bg-rose-500 rounded-md" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default ThemeButton;
