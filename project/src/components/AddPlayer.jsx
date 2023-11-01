import React from "react"
import '../styles/AddPlayer.css'

const AddPlayer = () => {
  return (
    <>
      <div className="addPlayer">
        <h1>Lägg till spelare</h1>
        <div className="newPlayer">
          <input type="text" placeholder="Skriv här..." />
        </div>
        <h2>Spelare 1</h2>
      </div>
    </>
  );
};

export default AddPlayer;
