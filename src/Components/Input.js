import React from "react";
export function Input({ userInput, processInput, handleTabbed }) {
  return (
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
  );
}

export default Input;
