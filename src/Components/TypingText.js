import React from "react";
import Word from "./Word";
export function TypingText({ word, activeWordIndex, correctWordArray }) {
  return (
    <p className=" text-stone-400">
      {/* {word.current.map((word, index) => { */}
      {word.map((word, index) => {
        return (
          <Word
            text={word}
            active={index === activeWordIndex}
            correct={correctWordArray[index]}
          />
        );
      })}
    </p>
  );
}

export default TypingText;
