import { useNavigate } from "react-router-dom";
import "../styles/TopList.css";

const TopList = () => {
  let storedPlayers = JSON.parse(localStorage.getItem("players"));
  let sortedStoredPlayers = storedPlayers.sort((a, b) => b.winsCounter - a.winsCounter);
  const navigate = useNavigate();

  return (
    <div className="biggestBoy">
      <button>
        <button
          className="exitButton"
          onClick={() => {
            navigate(-2);
          }}
        >
          x
        </button>
      </button>
      <div className="bigBoy">
        <h1>Topplista</h1>
        <div>
          <ul>
            {sortedStoredPlayers.map((player, index) => (
              <li key={index}>{player.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopList;
