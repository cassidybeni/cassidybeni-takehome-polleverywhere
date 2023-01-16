import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">All Raffles</Link>{" "}
        <Link to="/raffles/raffle_id/participants">Participants</Link>{" "}
        <Link to="/raffles/raffle_id/winner">Pick Winner</Link>{" "}
      </nav>
    </div>
  );
}

export default NavBar;
