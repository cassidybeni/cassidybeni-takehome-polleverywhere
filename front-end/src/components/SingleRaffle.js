import React from "react";
import NavBar from "./NavBar";

function SingleRaffle() {
  return (
    <div>
      <NavBar></NavBar>
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
        <button type="button">Reset</button>
      </form>
    </div>
  );
}

export default SingleRaffle;
