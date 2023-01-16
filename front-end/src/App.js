import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleRaffle from "../src/components/SingleRaffle";
import RaffleParticipants from "../src/components/RaffleParticipants";
import PickWinner from "../src/components/PickWinner";
import RaffleView from "../src/components/RaffleView";
import Home from "../src/components/Home";
import { apiURL } from "./util/apiURL";
const API = apiURL();

function App() {
  const [raffles, setRaffles] = useState([]);

  const addRaffle = (newRaffle) => {
    try {
      axios.post(`${API}/raffles`, newRaffle).then((res) => {
        setRaffles([...raffles, newRaffle]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios.get(`${API}/raffles`).then((res) => {
      const { data } = res;
      setRaffles(data);
    });
  });

  return (
    <div>
      <h1>Raffle App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} addRaffle={addRaffle}></Route>
          <Route path="/raffles/:raffle_id" element={<SingleRaffle />}></Route>
          <Route
            path="/raffles/:raffle_id/participants"
            element={<RaffleParticipants />}
          ></Route>
          <Route
            path="/raffles/:raffle_id/winner"
            element={<PickWinner />}
          ></Route>
          <Route
            path="/raffles/:raffle_id/view"
            element={<RaffleView />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
