import { WordButton } from "./WordButton";
import React from "react";

export function WordSection({ changeWordAmount, wordAmount }) {
  const wordAmounts = [10, 25, 50, 100];
  return (
    <>
      <div className="my-20">
        <h1 className="my-8 text-4xl">Word Amount</h1>
        <div className="grid grid-cols-4 gap-10">
          {wordAmounts.map((amount) => (         
            <WordButton
            key={amount}
            changeWordAmount={changeWordAmount}
            amount={amount}
            currentAmount = {wordAmount}
            />
          ))}
        </div>
      </div>
    </>
  );
}
