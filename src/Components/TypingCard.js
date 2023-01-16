import React, { useState } from "react";
import { useContext } from "react";
import "../App.css";
import TypingPage from "../Screens/TypingPage";
import ResultPage from "../Screens/ResultPage";
import commonWords from "../Data/word.json";
import { WordAmountContext } from "./WordProvider";

function TypingCard() {
  const { wordAmount, changeWordAmount } = useContext(WordAmountContext);
  let [typingList, setTypingList] = useState(renderWords());
  const [word, setWord] = useState(typingList);
  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [startCounting, setStartCounting] = useState(false);
  const [testFinished, setTestFinished] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  function handleReset() {
    setActiveWordIndex(0);
    setCorrectWordArray([]);
    setStartCounting(false);
    setUserInput("");
    setTestFinished(false);
    renderWords();
    setWord(renderWords());
  }

  function renderWords() {
    const randomNumbers = Array.from({ length: wordAmount }, () =>
      Math.floor(Math.random() * (150 - 1 + 1) + 1)
    );
    return randomNumbers
      .map((index) => commonWords.commonWords[index])
      .join(" ")
      .split(" ");
  }

  function handleTabbed(KeyCode) {
    if (KeyCode.key === "Tab") {
      KeyCode.preventDefault();
      handleReset();
    }
  }

  function processInput(value) {
    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(" ")) {
      if (activeWordIndex === word.length - 1) {
        setUserInput("");
        setStartCounting(false);
        setTestFinished(true);

        return;
      }

      setActiveWordIndex((index) => index + 1);
      setUserInput("");

      setCorrectWordArray((data) => {
        const newword = value.trim();
        const newResult = [...data];
        newResult[activeWordIndex] = newword === word[activeWordIndex];

        return newResult;
      });
    } else {
      setUserInput(value);
    }
  }

  return testFinished ? (
    <ResultPage
      getWords={typingList}
      timeElapsed={timeElapsed}
      testFinished={testFinished}
      setTestFinished={setTestFinished}
      handleReset={handleReset}
      correctWordArray={correctWordArray}
    />
  ) : (
    <TypingPage
      startCounting={startCounting}
      timeElapsed={timeElapsed}
      setTimeElapsed={setTimeElapsed}
      word={word}
      activeWordIndex={activeWordIndex}
      correctWordArray={correctWordArray}
      userInput={userInput}
      processInput={processInput}
      handleTabbed={handleTabbed}
      handleReset={handleReset}
    />
  );
}

export default TypingCard;
