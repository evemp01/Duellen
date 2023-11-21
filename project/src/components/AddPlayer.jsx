import React, { useState } from "react";
import "../styles/AddPlayer.css";
import { Link, useNavigate } from "react-router-dom";

const AddPlayer = ({ players, setPlayers }) => {
  const navigation = useNavigate();
  const [newPlayer, setNewPlayer] = useState("");
  const playerLimit = 10;
  const minPlayers = 3;
  console.log(players);
  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
    if (newPlayer !== "" && players.length < playerLimit) {
      setPlayers([...players, newPlayer]);
      setNewPlayer("");
    }
  };

  const handleDeletePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };

  return (
    <>
      <div className="align_menu_help">
        <Link to={"/Rules"}>
          <button className="helpButton">?</button>
        </Link>
      </div>
    <div className="addPlayer">
      <h1>Lägg till spelare</h1>
      <div>
        <input
          className="roundedCorners"
          type="text"
          value={newPlayer}
          onChange={handleInputChange}
          placeholder=""
          disabled={playerLimit <= players.length}
        />
        <button
          onClick={handleAddPlayer}
          disabled={playerLimit <= players.length}
        >
          +
        </button>
        {players.length >= playerLimit && <p>Max antal spelare uppnått</p>}
      </div>
      <div>
        <ul>
          {players.map((player, index) => (
            <li key={index}>
              {player}
              <button onClick={() => handleDeletePlayer(index)}>-</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {minPlayers > players.length && (
          <p>Lägg till minst 3 stycken spelare</p>
        )}
        <button
          onClick={() => {
            if (minPlayers <= players.length) {
              navigation("/competition");
            }
          }}
          disabled={minPlayers > players.length}
        >
          Start
        </button>
      </div>
    </div>
    </>
  );
};

export default AddPlayer;
