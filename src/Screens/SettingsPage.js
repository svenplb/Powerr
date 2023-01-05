import React, {useContext} from "react";
import Navbar from "../Components/Navbar";
import ThemeButton from "../Components/ThemeButton";
import { WordAmountContext } from "../Components/WordProvider";
const SettingsPage = () => {
  const { wordAmount, changeWordAmount } = useContext(WordAmountContext);
  return (
    <div>
      <section>
        <Navbar className="headspace" />
        <h1 className="headspace">Themes</h1>
        <ThemeButton label="Powerr Classic" themeClassName="normal-theme" />
        <ThemeButton label="Skull" themeClassName="theme-skullemoji" />
        <ThemeButton label="Dimmed" themeClassName="theme-dimmed" />
        <ThemeButton label="QuoteLeaf" themeClassName="theme-quoteleaf" />
    
        <button onClick={() => {changeWordAmount(10)}}>10 words</button>
        <button onClick={() => {changeWordAmount(25)}}>25 words</button>
        <button onClick={() => {changeWordAmount(50)}}>50 words</button>
        <button onClick={() => {changeWordAmount(100)}}>100 words</button>
      </section>
    </div>
  );
};

export default SettingsPage;
