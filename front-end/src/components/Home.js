import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import Raffle from "../components/Raffle";
import "./Home.css";

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
    <div className="home-container">
      <h2>New Raffle:</h2>
      <form>
        <label>Raffle Name:*</label>
        <br></br>
        <input type="text" required></input>
        <br></br>
        <label>Raffle Secret Token*</label>
        <br></br>
        <input type="text" required></input>
        <p>
          You must remember the Raffle token because it will be asked when
          picking a winner
        </p>
        <button>Create New Raffle</button>
      </form>
      <h2>All Raffles:</h2>
      {raffles.map((raffle) => {
        return <Raffle key={raffle.raffle_name} raffle={raffle} />;
      })}
    </div>
  );
}

export default Home;
