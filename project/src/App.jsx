import AddPlayer from './components/AddPlayer'
import './App.css'
import React, { useState } from 'react';

function App() {

  const [players, setPlayers] = useState([]);

  const addingPlayer = (newPlayer) => {
    setPlayers([players, newPlayer]);
  };

  return (
  <div className="app_big_div"> 
    <h1>Lägg till spelare</h1>
    <AddPlayer onAdd={addingPlayer} />
      <div>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
  </div>
  )
}

export default App
