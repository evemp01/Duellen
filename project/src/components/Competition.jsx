import React, { useEffect } from "react";
import challengesJson from "./../challenges.json";
import "../styles/Competition.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import React, {useCallback} from "react";

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
  // const navigation = useNavigate();
  const minChallenge = 0;
  const maxChallenge = challengesJson.allChallenges.length - 1;
  const randChallenge = rand(minChallenge, maxChallenge);
  let [randomPlayer1, randomPlayer2] = randomPlayers(players);
  // const handleNavigation = useCallback(() => {
  //   navigation("/Who_won");
  // }, [navigation]);
  useEffect(() => {
    // Store random players' information in local storage
    localStorage.setItem("randomPlayer1", randomPlayer1);
    localStorage.setItem("randomPlayer2", randomPlayer2);
  }, []);

  return (
    <div className="Competition">
      <div id="playerOne">
        <p>{players[randomPlayer1].name}</p>
      </div>
      <h1 id="VS">VS</h1>
      <div id="playerTwo">
        <p>{players[randomPlayer2].name}</p>
      </div>
      <div className="utmaning">
        <p>{challengesJson.allChallenges[randChallenge].challenge}</p>
      </div>
      <Link to={"/Who_won"}>
        <button /*onClick={handleNavigation}*/ className="next">Nästa</button>
      </Link>
    </div>
  );
};

export default Competition;
