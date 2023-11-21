// TopList.jsx

import React, { useState, useEffect } from 'react';
import './TopList.css';

const TopList = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player1", score: 100 },
    { id: 2, name: "Player2", score: 80 },
    { id: 3, name: "Player3", score: 120 },
    // Add more players as needed
  ]);

  useEffect(() => {
    // Sort players by score in descending order
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    setPlayers(sortedPlayers);
  }, [players]);

  return (
    <div className="TopList">
      <h1>Game Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopList;

