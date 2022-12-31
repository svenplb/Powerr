import React from "react";
export function ResetButton({ handleReset }) {
  return <button onClick={() => handleReset()}>reset</button>;
}

export default ResetButton;
