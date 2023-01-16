import React, { useEffect } from "react";

function Timer(props) {
  const { correctWords, startCounting, timeElapsed, setTimeElapsed } = props;

  useEffect(() => {
    let id;
    if (startCounting) {
      setTimeElapsed(0);
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 100);
    } else {
      setTimeElapsed(0);
    }
    return () => {
      clearInterval(id);
    };
  }, [startCounting]);

  const minutes = timeElapsed / 10 / 60;
  return (
    <div>
      <p>Timer: {timeElapsed / 10}</p>
      <p>Speed: {Math.round(correctWords / minutes || 0)} WPM</p>
    </div>
  );
}

export default Timer;
