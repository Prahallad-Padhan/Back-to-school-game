import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GamePage from "./components/GamePage";
import GamePage2 from "./components/GamePage2";
import TryAgainPage from "./components/TryAgainPage";
import ScoreCard from "./components/ScoreCard";
import ScoreCard2 from "./components/ScoreCard2";
import FruitsScore from "./components/FruitsScore";
import BagScore from "./components/BagScore";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/game2" element={<GamePage2 />} />
        <Route path="/try-again" element={<TryAgainPage />} />
        <Route path="/score-card" element={<ScoreCard />} />
        <Route path="/score-card2" element={<ScoreCard2 />} />
        <Route path="/fruits-score" element={<FruitsScore />} />
        <Route path="/bag-score" element={<BagScore />} />
      </Routes>
    </Router>
  );
};

export default App;
