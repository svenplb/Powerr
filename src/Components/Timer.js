import React, { useState, useEffect } from "react";

function Timer(props) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (props.startCounting) {
      setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
  },[props.startCounting]) 
  return <p>Timer: {timeElapsed}</p>;
}

export default Timer;
