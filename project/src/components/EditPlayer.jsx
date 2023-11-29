import React, { useState } from "react";
import "../styles/AddPlayer.css";
import "../styles/helpAndMenuButton.css";
import { useNavigate } from "react-router-dom";

const EditPlayer = ({ players, setPlayers }) => {
  const navigate = useNavigate();
  const [newPlayer, setNewPlayer] = useState("");
  const playerLimit = 21;
  const minPlayers = 3;
  // let storedPlayers = JSON.parse(localStorage.getItem("players"));
  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
    if (newPlayer !== "" && players.length < playerLimit) {
      setPlayers([
        {
          name: newPlayer,
          winsCounter: 0,
          drinksCounter: 0,
        },
        ...players,
      ]);
      let storedPlayers = JSON.parse(localStorage.getItem("players"));
      const updatedStoredPlayers = [
        {
          name: newPlayer,
          winsCounter: 0,
          drinksCounter: 0,
        },
        ...storedPlayers,
      ];
      localStorage.setItem("players", JSON.stringify(updatedStoredPlayers));
      console.log(localStorage.players);
      setNewPlayer("");
    }
  };
  const handleDeletePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);

    let storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
    const updatedStoredPlayers = storedPlayers.filter((_, i) => i !== index);
    localStorage.setItem("players", JSON.stringify(updatedStoredPlayers));
    console.log(localStorage.players);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddPlayer();
    }
  };

  return (
    <>
      <div className="editPlayer_sida">
        <h1>Redigera spelare</h1>
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

        <button
          className="backtoGame"
          onClick={() => {
            if (minPlayers <= players.length) {
              navigate(-2);
            }
          }}
          disabled={minPlayers > players.length}
        >
          Tillbaka till spelet
        </button>
      </div>
    </>
  );
};

export default EditPlayer;
