import React from "react";
import challengesJson from "./../challenges.json";
import "../styles/Competition.css";
import "../styles/helpAndMenuButton.css";
import { Link } from "react-router-dom";

const randomPlayers = (players) => {
  const minPlayer = 0;
  const maxPlayer = players.length - 1;

  let randPlayer = rand(minPlayer, maxPlayer);
  let randPlayer2 = rand(minPlayer, maxPlayer);

  while (randPlayer2 === randPlayer) {
    randPlayer2 = rand(minPlayer, maxPlayer);
  }
  return [randPlayer, randPlayer2];
};

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Competition = ({ players }) => {
  const minChallenge = 0;
  const maxChallenge = challengesJson.allChallenges.length - 1;
  const randChallenge = rand(minChallenge, maxChallenge);
  let [randomPlayer1, randomPlayer2] = randomPlayers(players);

  localStorage.setItem("randomPlayer1", randomPlayer1);
  localStorage.setItem("randomPlayer2", randomPlayer2);

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
      <div className="align1">
        <div className="bothPlayers" id="playerOne">
          <p>{players[randomPlayer1].name}</p>
        </div>
        <h1 id="VS">VS</h1>
        <div className="bothPlayers" id="playerTwo">
          <p>{players[randomPlayer2].name}</p>
        </div>
        <div className="challenge">
          <p>{challengesJson.allChallenges[randChallenge].challenge}</p>
        </div>
        <Link to={"/Who_won"}>
          <button className="nextButton">Nästa</button>
        </Link>
      </div>
    </div>
  );
};

export default Competition;
