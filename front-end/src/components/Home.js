import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import Raffle from "../components/Raffle";
const API = apiURL();

function Home() {
  const [raffles, setRaffles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/raffles`)
      .then(
        (res) => {
          setRaffles(res.data);
        },
        (e) => {
          console.log("axios error", e);
        }
      )
      .catch((e) => {
        console.log("caught", e);
      });
  }, []);

  return (
    <div>
      {raffles.map((raffle) => {
        return <Raffle key={raffle.raffle_name} raffle={raffle} />;
      })}
      <h1>Raffle App</h1>
      <h2>New Raffle:</h2>
      <form>
        <label>Raffle Name:*</label>
        <input type="text" required></input>
        <label>Raffle Secret Token*</label>
        <input type="text" required></input>
        <p>
          You must remember the Raffle token because it will be asked when
          picking a winner
        </p>
        <button>Create New Raffle</button>
        <h2>All Raffles:</h2>
      </form>
    </div>
  );
}

export default Home;
