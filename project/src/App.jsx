import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AddPlayer from './components/AddPlayer'
import './App.css'
import React from 'react';
import Rules from './components/Rules'
function App() {

  return (
    <div className="app_big_div">
    <BrowserRouter>
    <Routes>
     
 
  <Route path="/" element={<AddPlayer/>}/> 
  <Route path="/Rules" element={<Rules/>}/>
  
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App

