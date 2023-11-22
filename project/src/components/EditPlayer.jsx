import React, { useState } from "react";
import '../styles/menu.css'
import { useNavigate } from 'react-router-dom';

const EditPlayer = ({ players, setPlayers }) => {
    const navigate = useNavigate();
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
        <div className="addPlayer">
        <h1>Redigera spelare</h1>
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
              <p key={index}>
                {player}
                <button onClick={() => handleDeletePlayer(index)}>-</button>
              </p>
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
                navigate(-2);
              }
            }}
            disabled={minPlayers > players.length}
          >
            Tillbaka till spelet
          </button>
        </div>
      </div>
      </>
    );
  };

export default EditPlayer;
