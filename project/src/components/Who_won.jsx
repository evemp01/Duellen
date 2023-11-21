import "../styles/Who_won.css";
import { Link } from "react-router-dom";
const Who_won = () => {
  const player1 = JSON.parse(localStorage.getItem("randomPlayer1"));
  const player2 = JSON.parse(localStorage.getItem("randomPlayer2"));

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
        <button className="player1Button">
          <p>{player1.name}</p>
        </button>
        <h1>eller</h1>
        <button className="player2Button">
          <p>{player2.name}</p>
        </button>
      </div>
    </div>
  );
};

export default Who_won;
