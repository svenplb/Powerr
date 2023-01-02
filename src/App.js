import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Pages
import SettingsPage from "./Pages/SettingsPage";
import Home from "./Pages/Home";
import InfoPage from "./Pages/InfoPage.js";

function App() {
  return (
    <div className=" theme-skullemoji">
      <div className="">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/settings" element={<SettingsPage />} />
            <Route exact path="/info" element={<InfoPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
