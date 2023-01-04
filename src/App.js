import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Pages
import SettingsPage from "./Pages/SettingsPage";
import Home from "./Pages/Home";
import InfoPage from "./Pages/InfoPage.js";

function App() {
  const [theme, setTheme] = useState('theme-skullemoji');
  // const [wordAmount, setWordAmount] = useState(50)

  const changeTheme = newTheme => {
    setTheme(newTheme);
  }
  // const changeWordAmount = newWordAmount => {
  //   setWordAmount(newWordAmount);
  // }

  return (
    <div className={theme}>
      <div className="">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            {/* <Route exact path="/settings" element={<SettingsPage changeTheme={changeTheme} changeWordAmount = {changeWordAmount}/>} /> */}
            <Route exact path="/settings" element={<SettingsPage changeTheme={changeTheme}/>} />
            <Route exact path="/info" element={<InfoPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;