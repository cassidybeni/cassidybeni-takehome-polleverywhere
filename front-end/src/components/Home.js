import React from "react";
import { useState } from "react";
import Raffles from "../components/Raffles";
import "./Home.css";

function Home(props) {
  const [newRaffles, setnewRaffles] = useState({
    raffle_name: "",
    secret_token: "",
  });
  const [raffles, setRaffles] = useState([]);

  const handleChange = (e) => {
    setRaffles({ ...raffles, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addRaffle(newRaffles);
    props.history.push("/raffles");
  };

  return (
    <div className="home-container">
      <h2>New Raffle:</h2>
      <form>
        <label>Raffle Name:*</label>
        <br></br>
        <input
          type="text"
          required
          onChange={handleChange}
          defaultValue={raffles.raffle_name}
        ></input>
        <br></br>
        <label>Raffle Secret Token*</label>
        <br></br>
        <input
          type="text"
          required
          onChange={handleChange}
          defaultValue={raffles.secret_token}
        ></input>
        <p>
          You must remember the Raffle token because it will be asked when
          picking a winner
        </p>
        <button type="submit" onSubmit={handleSubmit}>
          Create New Raffle
        </button>
      </form>
      <h2>All Raffles:</h2>
      <Raffles></Raffles>
    </div>
  );
}

export default Home;
