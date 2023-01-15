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
      <form>
        <label>Name:</label>
        <input type="text" required></input>
        <label>Secret Token:</label>
        <input type="text" required></input>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Home;
