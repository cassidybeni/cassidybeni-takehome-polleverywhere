import React from "react";

function Home() {
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" required></input>
        <label>Secret Token:</label>
        <input type="text" required></input>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Home;
