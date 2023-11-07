import React, { useState } from 'react';
import '../styles/AddPlayer.css'


const AddPlayer = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');

  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
    if (newPlayer !== '') {
      setPlayers([...players, newPlayer]);
      setNewPlayer('');
    }
  };

  return (
    <div>
      <h1>Lägg till spelare</h1>
      <div>
        <input
          type="text"
          value={newPlayer}
          onChange={handleInputChange}
          placeholder=""
        />
        <button onClick={handleAddPlayer}>+</button>
      </div>
      <div>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddPlayer;
