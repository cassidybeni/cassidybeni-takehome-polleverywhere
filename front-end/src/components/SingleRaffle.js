import React from "react";
import NavBar from "./NavBar";
import "./SingleRaffle.css";

function SingleRaffle() {
  return (
    <div className="single-raffle-container">
      <NavBar></NavBar>
      <h2>Register to participate in the raffle:</h2>
      <form>
        <label>First Name*</label>
        <input type="text" required placeholder="First Name"></input>
        <label>Last Name*</label>
        <input type="text" required placeholder="Last Name"></input>
        <label>Email*</label>
        <input type="text" required placeholder="johndoe@example.com"></input>
        <label>Phone</label>
        <input type="text" placeholder="Phone"></input>
        <button type="submit">Submit</button>
        <br></br>
        <button type="button">Reset</button>
      </form>
    </div>
  );
}

export default SingleRaffle;
