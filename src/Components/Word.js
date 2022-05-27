import React, { useState, useRef, useEffect } from "react";

function Word({ text, active, correct }) {
  const rerender = useRef(0);

  useEffect(() => {
    rerender.current += 1;
  });

  if (correct === true) {
    return <span className="correct text-teal-400">{text} </span>;
  }

  if (correct === false) {
    return <span className=" text-rose-900">{text} </span>;
  }
  if (active) {
    return <span className="text-violet-400">{text} </span>;
  }

  return (
    <span
      style={{
        color: active ? "#9750DD" : "",
        fontWeight: active ? "bold" : "b",
      }}
    >
      {text}{" "}
    </span>
  );
}
Word = React.memo(Word)

export default Word;
