// TopList.jsx

import React from 'react';

const TopList = ({ people }) => {
  return (
    <div>
      <h1>List of People</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopList;






