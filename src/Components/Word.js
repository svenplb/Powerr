import React, { useState, useRef, useEffect } from "react";

function Word({ text, active, correct }) {
  const rerender = useRef(0);

  useEffect(() => {
    rerender.current += 1;
  });

  if (correct === true) {
    return <span className=" text-white">{text} </span>;
  }

  if (correct === false) {
    return <span className="underline bg-orange-500 bg-opacity-20 text-orange-300 rounded-sm mr-1">{text} </span>;
  }
  if (active) {
    return <span className=" text-orange-400">{text} </span>;
  }

  return (
    <span
    >
      {text}{" "}
    </span>
  );
}
Word = React.memo(Word)

export default Word;
