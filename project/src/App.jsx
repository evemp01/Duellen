import AddPlayer from './components/AddPlayer'
import './App.css'
import Button from './components/Button'
import React, { useState } from 'react';

function App() {

  const [players, setPlayers] = useState([]);

  const addingPlayer = (newPlayer) => {
    setPlayers([players, newPlayer]);
  
  };

  const handleClick = () => {
    alert('Button Clicked!');
    };



  return (
 <div>
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
 <div className='speare1'>
 <Button lable="Click me" name="My Button" onClick={handleClick} />
 </div>
  
 </div>
  )
   
}


export default App
