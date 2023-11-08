import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPlayer from './components/AddPlayer';
import Competition from './components/Competition';
import './App.css';

function App() {

  return (
    <Router>
    <div className="app_big_div">
      <Switch>
        <Route path="/" exact component={AddPlayer} />
        <Route path="/competition" component={Competition} />
      </Switch>
    </div>
  </Router>
  
  );
}

export default App
