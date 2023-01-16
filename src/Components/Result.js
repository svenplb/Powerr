import React, { useState } from "react";

const Result = (props) => {
  const [toggle, setToggle] = useState(false);
  const { correctWords, totalWords, timeElapsed } = props;
  const minutes = timeElapsed / 60 / 10;

  function toggleWords() {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <div className=" bg-skin-bgcol p-9 rounded-2xl backdrop-blur">
      <p>WPM</p>
      <p className=" text-6xl mb-6 text-skin-base">
        {Math.round(correctWords / minutes || 0)}
      </p>
      <p>Acc:</p>
      <p className=" text-6xl mb-6 text-skin-base">
        {100 - (totalWords.length - correctWords) / (totalWords.length / 100)}%
      </p>

      <div className="my-8">
        <p>raw wpm: {Math.round(totalWords.length / minutes || 0)}</p>
        <p>test type: {totalWords.length} Words</p>
      </div>
      <button
        onClick={toggleWords}
        className=" rounded-md p-2 bg-skin-fill hover:-translate-y-1 hover:opacity-70  ease-in-out duration-200"
      >
        word history
      </button>
      {toggle ? <p>{totalWords.join(" ")}</p> : <div></div>}
    </div>
  );
};

export default Result;
