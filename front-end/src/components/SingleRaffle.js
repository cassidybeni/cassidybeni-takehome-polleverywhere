import React from "react";
import NavBar from "./NavBar";

function SingleRaffle() {
  return (
    <div>
      <NavBar></NavBar>
      <form>
        <label>First Name:</label>
        <input type="text" required></input>
        <label>Last Name:</label>
        <input type="text" required></input>
        <label>Email:</label>
        <input type="text" required></input>
        <label>Phone Number:</label>
        <input type="text"></input>
        <button type="submit">submit</button>
        <button type="button">reset</button>
      </form>
    </div>
  );
}

export default SingleRaffle;
