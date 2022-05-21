import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Pages
import SettingsPage from "./Pages/SettingsPage";
import TypingPage from "./Pages/TypingPage"
import InfoPage from "./Pages/InfoPage.js";

function App() {
  return (
    <Router>
      {/* <section className="grid h-screen"></section> */}
        <Routes>
          <Route exact path="/" element={<TypingPage />} />
          <Route exact path="/home" element={<TypingPage />} />
          <Route exact path="/settings" element={<SettingsPage />} />
          <Route exact path="/info" element={<InfoPage />} />
        </Routes>   
     
    </Router>
  );
}

export default App;
