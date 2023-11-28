import { useNavigate } from "react-router-dom";
import "../styles/TopList.css";

const TopList = () => {
  let storedPlayers = JSON.parse(localStorage.getItem("players"));
  let sortedStoredPlayers = storedPlayers.sort((a, b) => b.winsCounter - a.winsCounter);
  const navigate = useNavigate();

  return (
    <div className="biggestBoy">
      <div className="alignright">
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
      </div>
    </div>
  );
};

export default TopList;
