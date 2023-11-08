import React, { useState } from 'react';
import '../styles/AddPlayer.css';
import challengesJson from './../challenges.json';


const AddPlayer = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  const playerLimit = 10;
  const minPlayers = 2;

  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
    if (newPlayer !== '' && players.length < playerLimit) {
      setPlayers([...players, newPlayer]);
      setNewPlayer('');
    }
  };

  const handleDeletePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  }

  return (
    <div className='addPlayer'>
      <h1>Lägg till spelare</h1>
      {/* <h1>{challengesJson.allChallenges[0].challenge}</h1> */}
      <div>
        <input className='roundedCorners'
          type="text"
          value={newPlayer}
          onChange={handleInputChange}
          placeholder=""
          disabled = {playerLimit <= players.length}
        />
        <button onClick={handleAddPlayer} disabled = {playerLimit <= players.length}>+</button>
        {players.length >= playerLimit && <p>Max antal spelare uppnått</p>}
      </div>
      <div>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}<button onClick={() => handleDeletePlayer(index)}>-</button></li>
          ))}
        </ul>
      </div>
      <div>
        {minPlayers > players.length && <p>Lägg till minst 2 stycken spelare</p>}
        <button onClick={handleAddPlayer} disabled = {minPlayers > players.length}>Start</button>
        </div>
    </div>
  );
};

export default AddPlayer;
