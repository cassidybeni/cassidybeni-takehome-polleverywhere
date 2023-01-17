import React from "react";
import NavBar from "./NavBar";

function PickWinner() {
  return (
    <div>
      <NavBar></NavBar>
      <h2>Pick a Winner</h2>
      <form>
        <label>Secret Token:</label>
        <input type="text" required placeholder="Secret Token"></input>
        <button>Pick a Winner</button>
      </form>
      <div>
        <h3>Secret Token</h3>
        <p>The secret token used when creating the raffle must be provided.</p>
      </div>
    </div>
  );
}

export default PickWinner;
