import React from "react";
import "./Raffle.css";
import { Link } from "react-router-dom";

function Raffle({ raffle }) {
  return (
    <div className="list-container">
      <Link to={`/raffles/${raffle.raffle_id}/participants`}>
        <h3 className="raffles-list">{raffle.raffle_name}</h3>
      </Link>
    </div>
  );
}

export default Raffle;
