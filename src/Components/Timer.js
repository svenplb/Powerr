import React, { useState, useEffect } from "react";

function Timer(props) {
  const { correctWords, startCounting, timeElapsed, setTimeElapsed} = props;

  useEffect(() => {
    let id;
    if (startCounting) {
      setTimeElapsed(0)
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    } else {
    }
    return () => {
      clearInterval(id);
    };
  }, [startCounting]);


  const minutes = timeElapsed / 60;
  return (
    <div>
      <p>Timer: {timeElapsed}</p>
      <p>Speed: {Math.round(correctWords / minutes || 0)} WPM</p>
    </div>
  );
}

export default Timer;
