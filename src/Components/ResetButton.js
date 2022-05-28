import React from 'react'
function ResetButton() {
  
  function handleReset() {
    console.log("state resetted");
  }

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ResetButton