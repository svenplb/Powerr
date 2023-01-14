import React, { useContext } from "react";
import Navbar from "../Components/Navbar";

import { WordSection } from "../Components/WordSection";
import { ThemesSection } from "../Components/ThemesSection"
import { WordAmountContext } from "../Components/WordProvider";

const SettingsPage = () => {
  const { wordAmount, changeWordAmount } = useContext(WordAmountContext);
  return (
    <div>
      <section>
        <Navbar/>
        <ThemesSection />
        <WordSection changeWordAmount={changeWordAmount} wordAmount = {wordAmount}/>
      </section>
    </div>
  );
};

export default SettingsPage;
