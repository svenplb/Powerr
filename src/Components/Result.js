import React, { useState } from "react";
import Timer from "./Timer";

const Result = (props) => {
    const { correctWords, startCounting, totalWords, timeElapsed, testFinished, setTestFinished} = props;
    const minutes = timeElapsed / 60;
    return(
        <div>
            <p>Speed: {Math.round(correctWords / minutes || 0)} WPM</p>
            <p>acc: {100 - ((totalWords.length - correctWords)/(totalWords.length/100))}%</p>
            <p>raw wpm: {Math.round(totalWords.length / minutes || 0)}</p>
        </div>
    )
}

export default Result;