import "../styles/Result.css";
import "../styles/exitGame.css";
import { Link, useNavigate } from "react-router-dom";

const Result = ({ players, setPlayers }) => {
  const navigate = useNavigate();
  let storedPlayers = JSON.parse(localStorage.getItem("players"));
  let sortedStoredPlayers = storedPlayers.sort(
    (a, b) => b.winsCounter - a.winsCounter
  );

  return (
    <div>
      <div className="rightyTighty">
        <button
          className="backArrow"
          onClick={() => {
            navigate(-2);
          }}
        ></button>
      </div>

      <div className="editPlayer_sida">
        <h1>Resultat</h1>

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

      <div className = "alignExitGame">
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
