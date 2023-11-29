import React, { useState } from "react";
import "../styles/Who_won.css";
import { Link } from "react-router-dom";
const Who_won = ({ players }) => {
  let player1 = localStorage.getItem("randomPlayer1");
  let player2 = localStorage.getItem("randomPlayer2");
  let storedPlayers = JSON.parse(localStorage.getItem("players"));

  if (storedPlayers[player1] === undefined || storedPlayers[player2] === undefined) {
    player1 = 1;
    player2 = 2;
  }

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const AddPoints = (winningPlayer) => {
    if (winningPlayer === players[player1].name) {
      storedPlayers[player1].winsCounter += 1;
    } else {
      storedPlayers[player2].winsCounter += 1;
    }
    console.log(storedPlayers);
    localStorage.setItem("players", JSON.stringify(storedPlayers));
  };

  return (
    <div>
      <div className="align_menu_help">
        <Link to={"/Rules"}>
          <button className="helpButton">?</button>
        </Link>
        <Link to={"/menu"}>
          <button className="menuButton">≡</button>
        </Link>
      </div>
      <div className="alignWhoWon">
        <h1>Vem vann?</h1>
        <Link to={"/Competition"}>
          <button
            className="bothPlayers"
            id="playerOneClickable"
            value={players[player1].name}
            onClick={(e) => {
              AddPoints(e.target.value);
            }}
          >
            <p>{players[player1].name}</p>
          </button>
        </Link>
        <h1>eller</h1>
        <Link to={"/Competition"}>
          <button
            className="bothPlayers"
            id="playerTwoClickable"
            value={players[player2].name}
            onClick={(e) => {
              AddPoints(e.target.value);
            }}
          >
            <p>{players[player2].name}</p>
          </button>
        </Link>
      </div>
      <div id="alignBottomText">
        <h2>Förloraren tar {rand(1, 5)} klunkar</h2>
      </div>
    </div>
  );
};

export default Who_won;
