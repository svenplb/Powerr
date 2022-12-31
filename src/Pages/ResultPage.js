import React from "react";
import Result from "../Components/Result";
import ResetButton from "../Components/ResetButton";
export function ResultPage({
  getWords,
  timeElapsed,
  testFinished,
  setTestFinished,
  handleReset,
  correctWordArray,
}) {
  return (
    <div>
      <Result
        correctWords={correctWordArray.filter(Boolean).length}
        totalWords={getWords()}
        timeElapsed={timeElapsed}
        testFinished={testFinished}
        setTestFinished={setTestFinished}
      />
      <ResetButton handleReset={handleReset} />
    </div>
  );
}

export default ResultPage;
