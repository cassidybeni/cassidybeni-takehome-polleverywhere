import React from "react";
import NavBar from "./NavBar";

function PickWinner() {
  return (
    <div>
      <NavBar></NavBar>
      <form>
        <label>Secret Token:</label>
        <input type="text" required></input>
      </form>
    </div>
  );
}

export default PickWinner;
