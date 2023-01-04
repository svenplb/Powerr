import React from "react";

const ThemeButton = ({ label, theme, onClick }) => {
  return (
    <div>
      <button className="my-5 p-8 bg-rose-500 rounded-md" onClick={() => onClick(theme)}>{label}</button>
    </div>
  );
}

export default ThemeButton;