import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";
import Competition from "./components/Competition";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  return (
    <BrowserRouter>
      <div className="app_big_div">
        <Routes>
          <Route
            path="/"
            element={<AddPlayer setPlayers={setPlayers} players={players} />}
          />
          <Route
            path="/competition"
            element={<Competition players={players} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
