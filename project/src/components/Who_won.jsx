import "../styles/Who_won.css";
import { Link, useNavigate } from "react-router-dom";
const Who_won = () => {
  const player1 = localStorage.getItem("randomPlayer1");
  const player2 = localStorage.getItem("randomPlayer2");

  //onClick={goBack}
    // const navigate = useNavigate();
    // const goBack = () => {
    //   navigate(-1);
    // }
  
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
        <Link to={"/competition"}>
        <button className="player1Button"> 
        
          <p>{player1}</p>
          
        </button>
        </Link>
        <h1>eller</h1>
        <Link to={"/competition"}>
        <button className="player2Button">
          <p>{player2}</p>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Who_won;
