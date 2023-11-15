import { ReactDOM } from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddPlayer from './components/AddPlayer'
import './App.css'
import React from 'react';
import Rules from './components/Rules'
import Who_won from './components/Who_won'
function App() {
  return (
  <div className="app_big_div"> 
  <BrowserRouter>
  <Routes>
    <Route path="/Rules" element={<Rules/>}/>
    <Route path="/Who_won" element={<Who_won/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
