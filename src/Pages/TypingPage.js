import React from "react";

import Timer from "../Components/Timer";
import TypingText from "../Components/TypingText";
import Input from "../Components/Input";
import ResetButton from "../Components/ResetButton";

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
      <ResetButton handleReset={handleReset} />
    </div>
  );
}
export default TypingPage;
