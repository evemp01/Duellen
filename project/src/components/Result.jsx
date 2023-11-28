import { Link } from "react-router-dom";
import "../styles/Result.css";

const Result = ({ players, setPlayers }) => {
  let storedPlayers = JSON.parse(localStorage.getItem("players"));
  let sortedStoredPlayers = storedPlayers.sort((a, b) => b.winsCounter - a.winsCounter);

  return (
    <div className="editPlayer_sida">
      <Link to={"/menu"}>
        <button className="exitButton">z</button>
      </Link>
      <div>
        <h1>Resultat</h1>
        <div>
          <h3>Vinster</h3>
          <div className="column">
            <ul className="lists">
              {sortedStoredPlayers.map((player, index) => (
                <li key={index}>{player.name}</li>
              ))}
            </ul>
            <ul className="lists">
              {sortedStoredPlayers.map((player, index) => (
                <li key={index}>{player.winsCounter}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link to={"/"}>
          <button
            className="exitGame"
            onClick={() => {
              localStorage.clear();
              setPlayers([]);
              console.log(players);
              console.log(localStorage);
            }}
          >
            Avsluta spel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
