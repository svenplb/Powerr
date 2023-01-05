import React from "react";

import Timer from "../Components/Timer";
import TypingText from "../Components/TypingText";
import Input from "../Components/Input";

export function TypingPage({
  startCounting,
  timeElapsed,
  setTimeElapsed,
  word,
  activeWordIndex,
  correctWordArray,
  userInput,
  processInput,
  handleTabbed,
  handleReset,
}) {
  return (
    <div>
      <div className="bg-skin-bgcol p-9 rounded-2xl backdrop-blur">
        {" "}
        <Timer
          startCounting={startCounting}
          correctWords={correctWordArray.filter(Boolean).length}
          timeElapsed={timeElapsed}
          setTimeElapsed={setTimeElapsed}
        />
        <TypingText
          word={word}
          activeWordIndex={activeWordIndex}
          correctWordArray={correctWordArray}
        />
        <Input
          userInput={userInput}
          processInput={processInput}
          handleTabbed={handleTabbed}
        />
      </div>
    </div>
  );
}
export default TypingPage;
