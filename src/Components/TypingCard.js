import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import commonWords from "../Data/word.json";
import "../App.css";
import Word from "./Word";
import ResetButton from "./ResetButton";
import Result from "./Result";
import Timer from "./Timer";
import Wordlist from "./Wordlist";
import { MotionConfig } from "framer-motion";

function TypingCard({}) {
  let [typingList, setTypingList] = useState(renderWords());

  const getWords = () => typingList.split(" ");

  const wordAmount = 30;
  // const word = useRef(getWords());
  // const [wordtwo, setWordTwo] = useState(getWords());
  const [word, setWord] = useState(getWords());
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
    setTypingList((typingList = renderWords()));
    getWords();
    renderWords();
   
  }
  function renderWords() {
    let genWords = "";
    let wordAmount = 30;
    for (let i = 0; i <= wordAmount; i++) {
      const randomNumber = [Math.floor(Math.random() * (150 - 1 + 1) + 1)];
      if(i == wordAmount) {
        genWords = genWords + commonWords.commonWords[randomNumber];
      }
      else {
        genWords = genWords + commonWords.commonWords[randomNumber] + " ";
        
      }
    }
    return(genWords);
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
      // if (activeWordIndex === word.current.length - 1) {
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
        // newResult[activeWordIndex] = newword === word.current[activeWordIndex];
        newResult[activeWordIndex] = newword === word[activeWordIndex];

        return newResult;
      });
    } else {
      setUserInput(value);
    }
  }
  return testFinished ? (
    <motion.div>
      <Result
        correctWords={correctWordArray.filter(Boolean).length}
        totalWords={getWords()}
        timeElapsed={timeElapsed}
        testFinished={testFinished}
        setTestFinished={setTestFinished}
      />
    </motion.div>
  ) : (
    //    startCounting={startCounting}
    //    correctWords={correctWordArray.filter(Boolean).length}

    <motion.div>
      <div className="TypingCard">
        <div className="border-none">
          <div className="flex"></div>
          <div className="m-4"></div>
          <div className="flex"></div>

          <Timer
            startCounting={startCounting}
            correctWords={correctWordArray.filter(Boolean).length}
            timeElapsed={timeElapsed}
            setTimeElapsed={setTimeElapsed}
          />
          <p css={{ fontFamily: "monospace", fontSize: "$md" }}>
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
          <input
            className=" opacity-10 bg-black rounded-md p-2 my-3 w-full"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            autoFocus
            clearable
            value={userInput}
            onChange={(e) => processInput(e.target.value)}
            onKeyDown={(e) => handleTabbed(e)}
          />
        </div>
        <button onClick={handleReset}>reset</button>
      </div>
    </motion.div>
  );
}

export default TypingCard;
