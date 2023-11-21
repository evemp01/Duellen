// App.jsx

import React from 'react';
import TopList from './components/.Toplist';


const App = () => {
  // Sample person data
  const people = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    // Add more people as needed
  ];

  return (
    <div>
      <PersonList people={people} />
    </div>
  );
};

export default App;





