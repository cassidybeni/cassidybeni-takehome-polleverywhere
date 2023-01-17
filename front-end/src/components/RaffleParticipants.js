import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import NavBar from "./NavBar";
import "./RaffleParticipants.css";

const API = apiURL();

function RaffleParticipants() {
  const [raffle, setRaffle] = useState([]);
  const { raffle_id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/raffles/${raffle_id}`)
      .then((res) => {
        setRaffle(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [raffle_id]);
  return (
    <div>
      <h2 className="raffle-name">{raffle.raffle_name}</h2>
      <NavBar></NavBar>
    </div>
  );
}

export default RaffleParticipants;
