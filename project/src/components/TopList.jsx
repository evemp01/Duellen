import { useNavigate } from "react-router-dom";
import "../styles/TopList.css";
import "../styles/exitButton.css";

const TopList = () => {
  let storedPlayers = JSON.parse(localStorage.getItem("players"));
  let sortedStoredPlayers = storedPlayers.sort((a, b) => b.winsCounter - a.winsCounter);
  const navigate = useNavigate();

  return (
    <div>
      <div className="alignRight">
      <button
        className="exitButton"
        onClick={() => {
          navigate(-2);
        }}
      >
        x
      </button>
      </div>
      <div className="bigBoy">
        <h1>Topplista</h1>
        <div>
          <h3 id="names">Namn</h3>
          <h3 id="wins">Vinster</h3>
          <div className="column">
            <ul className="lists">
              {sortedStoredPlayers.map((player, index) => (
                <li className="name" key={index}>{player.name}</li>
              ))}
            </ul>
            <ul className="lists">
              {sortedStoredPlayers.map((player, index) => (
                <li className="points" key={index}>{player.winsCounter}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopList;
