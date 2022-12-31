import React from "react";
export function ResetButton({ handleReset }) {
  return (
    <button autoFocus onClick={() => handleReset()}>
      reset
    </button>
  );
}

export default ResetButton;