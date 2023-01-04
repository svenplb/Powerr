import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "../Components/ThemeProvider";

// Pages
import Home from "../Screens/Home";
import SettingsPage from "../Screens/SettingsPage";
import InfoPage from "../Screens/InfoPage";

function AppRoutes() {
  //   * implement later
  //   const changeWordAmount = (newWordAmount) => {
  //     setWordAmount(newWordAmount);
  //   };

  //     * implement later
  /* <Route exact path="/settings" element={<SettingsPage changeTheme={changeTheme} changeWordAmount = {changeWordAmount}/> */

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/settings" element={<SettingsPage />} />
          <Route exact path="/info" element={<InfoPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default AppRoutes;
