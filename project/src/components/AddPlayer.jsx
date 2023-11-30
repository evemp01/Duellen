import React, { useState } from "react";
import "../styles/AddPlayer.css";
import { Link, useNavigate } from "react-router-dom";

const AddPlayer = ({ players, setPlayers }) => {
  const navigation = useNavigate();
  const [newPlayer, setNewPlayer] = useState("");
  const playerLimit = 21;
  const minPlayers = 3;
  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddPlayer();
    }
  };

  const savePlayers = (players) => {
    localStorage.setItem("players", JSON.stringify(players));

    if (minPlayers <= players.length) {
      navigation("/competition");
    }
  };

  const handleAddPlayer = () => {
    if (newPlayer !== "" && players.length < playerLimit) {
      setPlayers([
        ...players,
        {
          name: newPlayer,
          winsCounter: 0,
          drinksCounter: 0,
        },
      ]);
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
        <div className="inputField">
          <input
            id="roundedCorners"
            type="text"
            maxLength="11"
            value={newPlayer}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder=""
            disabled={playerLimit <= players.length}
          />
          <button className="plus" onClick={handleAddPlayer} disabled={playerLimit <= players.length}>
            +
          </button>
          {players.length >= playerLimit && <p>Max antal spelare uppnått</p>}
        </div>
        <div className="scrollbar">
          <ul>
            {players.map((player, index) => (
              <p className="listofPlayers" key={index}>
                {player.name}
                <button className="minus" onClick={() => handleDeletePlayer(index)}>
                  -
                </button>
              </p>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className="message" style={{ color: players.length >= minPlayers ? "#F3DFA2" : "black" }}>
          Lägg till minst 3 spelare
        </p>

        <button className="start" onClick={() => savePlayers(players)} disabled={minPlayers > players.length}>
          Start
        </button>
      </div>
    </>
  );
};

export default AddPlayer;
