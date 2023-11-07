import React, { useState } from 'react';
import '../styles/AddPlayer.css'


const AddPlayer = ({ onAdd }) => {
  const [newPlayer, setNewPlayer] = useState('');

  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
    if (newPlayer !== '') {
      onAdd(newPlayer);
      setNewPlayer('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newPlayer}
        onChange={handleInputChange}
        placeholder="Lägg till spelare"
      />
      <button onClick={handleAddPlayer}>+</button>
    </div>
  );
};

export default AddPlayer;
