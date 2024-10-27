import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioScreen from "./screens/PortfolioScreen";
import ProjectDetails from "./screens/Projectscreen.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioScreen />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
