import React from "react";
import { Link, useParams } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const { raffle_id } = useParams();
  return (
    <nav className="nav-container">
      <button className="nav-btn">
        <Link to="/">All Raffles</Link>
      </button>
      <button className="nav-btn">
        <Link to={`/raffles/${raffle_id}/participants`}>Participants</Link>
      </button>
      <button className="nav-btn">
        <Link to={`/raffles/${raffle_id}/winner`}>Pick Winner</Link>
      </button>
    </nav>
  );
}

export default NavBar;
