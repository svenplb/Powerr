import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeButton = ({ label, themeClassName }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  function handleClick() {
    changeTheme(themeClassName);
    console.log("Theme Class Name:" + themeClassName);
  }

  return (
    themeClassName == theme ?

    <div>   
      <button className="p-8 rounded-md w-full bg-skin-fill hover:opacity-70  duration-200 outline-dashed outline-2 outline-offset-2 text-skin-base" onClick={handleClick}>
        {label}
      </button>
    </div>
    :
    
    <div>   
      <button className="p-8 rounded-md w-full bg-skin-fill hover:-translate-y-1 hover:scale-110 hover:opacity-70  ease-in-out duration-200" onClick={handleClick}>
        {label}
      </button>
    </div>
    
  );
};

export default ThemeButton;
