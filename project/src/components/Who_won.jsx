import "../styles/Who_won.css";
import { Link } from "react-router-dom";
const Who_won = ({ players }) => {
  let player1 = localStorage.getItem("randomPlayer1");
  let player2 = localStorage.getItem("randomPlayer2");
  let storedPlayers = JSON.parse(localStorage.getItem("players"));

  // Use state to get for this game add to wincounter in players

  const AddPoints = (e) => {
    if (e == players[player1].name) {
      storedPlayers[player1].winsCounter = storedPlayers[player1].winsCounter + 1;
      localStorage.setItem("players", JSON.stringify(storedPlayers));

      // console.log(player1.winsCounter);
      // console.log(player1.winsCounter + player1.name);
    } else {
      storedPlayers[player2].winsCounter = storedPlayers[player2].winsCounter + 1;
      localStorage.setItem("players", JSON.stringify(storedPlayers));

      //console.log(player2.winsCounter + player2.name);
    }
  };
  console.log(localStorage.players);

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
      <div className="align">
        <h1>Vem vann?</h1>
        <Link to={"/Competition"}>
          <button className="player1Button" value={players[player1].name} onClick={(e) => AddPoints(e.target.value)}>
            <p>{players[player1].name}</p>
          </button>
        </Link>
        <h1>eller</h1>
        <Link to={"/Competition"}>
          <button className="player2Button" value={players[player2].name} onClick={(e) => AddPoints(e.target.value)}>
            <p>{players[player2].name}</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Who_won;
