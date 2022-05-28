import React, { useState, useEffect } from "react";

function Timer(props) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const { correctWords, startCounting } = props;
  useEffect(() => {
    if (startCounting) {
      setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
  }, [startCounting]);

  const minutes = timeElapsed/60;
  return (
    <div>
      <p>Timer: {timeElapsed}</p>
      <p>Speed: {(correctWords / minutes) || 0} WPM</p>
    </div>
  );
}

export default Timer;
