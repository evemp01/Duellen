import React, { useState } from 'react';
import '../styles/AddPlayer.css'


const AddPlayer = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  const playerLimit = 10;

  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
    if (newPlayer !== '' && players.length < playerLimit) {
      setPlayers([...players, newPlayer]);
      setNewPlayer('');
    }
  };

  return (
    <div className='addPlayer'>
      <h1>Lägg till spelare</h1>
      <div>
        <input className='roundedCorners'
          type="text"
          value={newPlayer}
          onChange={handleInputChange}
          placeholder=""
          disabled = {playerLimit <= players.length}
        />
        <button onClick={handleAddPlayer} disabled = {playerLimit <= players.length}>+</button>
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
