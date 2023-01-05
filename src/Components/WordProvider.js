import React from "react";
import { createContext, useState } from "react";

export const WordAmountContext = createContext();

function WordProvider({children}) {
  const [wordAmount, setWordAmount] = useState(50);
  const changeWordAmount = (newWordAmount) => {
    setWordAmount(newWordAmount);
  };
  return (
    <WordAmountContext.Provider value={{ wordAmount, changeWordAmount }}>
        <div>{children}</div>
    </WordAmountContext.Provider>
  );
}

export default WordProvider;
