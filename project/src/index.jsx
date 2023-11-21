import React from 'react';
import ReactDOM from 'react-dom';
import TopList from './TopList';  // Updated import statement
import './TopList.css';  // Updated import statement

ReactDOM.render(
  <React.StrictMode>
    <TopList />
  </React.StrictMode>,
  document.getElementById('root')
);