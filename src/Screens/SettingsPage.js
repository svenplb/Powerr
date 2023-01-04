import React from "react";
import Navbar from "../Components/Navbar";
import ThemeButton from "../Components/ThemeButton";

const SettingsPage = ({ changeTheme, changeWordAmount }) => {
  return (
    <div>
      <section>
        <Navbar className="headspace" />
        <h1 className="headspace">Themes</h1>
        <ThemeButton label="Powerr Classic" themeClassName="normal-theme" />
        <ThemeButton label="Skull" themeClassName="theme-skullemoji" />
        <ThemeButton label="Dimmed" themeClassName="theme-dimmed" />
        <ThemeButton label="QuoteLeaf" themeClassName="theme-quoteleaf" />
      </section>
    </div>
  );
};

export default SettingsPage;
