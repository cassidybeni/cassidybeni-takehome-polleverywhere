import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleRaffle from "../src/components/SingleRaffle";
import RaffleParticipants from "../src/components/RaffleParticipants";
import PickWinner from "../src/components/PickWinner";
import RaffleView from "../src/components/RaffleView";
import Home from "../src/components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/raffles/:raffle_id" element={<SingleRaffle />}></Route>
        <Route
          path="/raffles/:raffle_id/participants"
          element={<RaffleParticipants />}
        ></Route>
        <Route
          path="/raffles/:raffle_id/winner"
          element={<PickWinner />}
        ></Route>
        <Route path="/raffle/raffle_id/view" element={<RaffleView />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
