import "../styles/Who_won.css";
import { Link } from "react-router-dom";
const Who_won = () => {
  return (
    <div>
      <div className="align_menu_help">
        <Link to={"/Rules"}>
          <button className="helpButton">?</button>
        </Link>
        <Link to={"/Rules"}>
          <button className="menuButton">≡</button>
        </Link>
      </div>
      <div className="align">
        <h1>Vem vann?</h1>
        <button className="player1Button">Spelare 1</button>
        <h1>eller</h1>
        <button className="player2Button">Spelare 2</button>
      </div>
    </div>
  );
};

export default Who_won;
