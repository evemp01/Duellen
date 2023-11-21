import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";
import Competition from "./components/Competition";
import "./App.css";
import Rules from "./components/Rules";
import Who_won from "./components/Who_won";
import Menu from "./components/menu";
import EditPlayer from "./components/EditPlayer";

function App() {
  const [players, setPlayers] = useState([]);
  return (
    <BrowserRouter>
      <div className="app_big_div">
        <Routes>
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/Who_won" element={<Who_won />} />
          <Route path="/EditPlayer" element={<EditPlayer setPlayers={setPlayers} players={players} />} />
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
