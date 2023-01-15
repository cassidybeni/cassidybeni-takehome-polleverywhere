import React from "react";
import { Link } from "react-router-dom";

function Raffle({ raffle }) {
  return (
    <div>
      <Link to={`/raffles/${raffle.raffle_id}/view`}>
        <h1>{raffle.raffle_name}</h1>
      </Link>
    </div>
  );
}

export default Raffle;
