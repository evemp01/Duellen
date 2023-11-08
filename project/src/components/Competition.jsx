import React from 'react';
import challengesJson from './../challenges.json';
import '../styles/Competition.css';

const Competition = () => {

    const min = 0;
    const max = challengesJson.allChallenges.length;
    
    const rand = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randNumber = rand(min, max);

    return(
        <div className='Competition'>
            <div id = 'playerOne'>Spelare 1</div>
            <h1 id = 'VS'>VS</h1>
            <div id = 'playerTwo'>Spelare 2</div>
            <div className='utmaning'>
                <p>{challengesJson.allChallenges[randNumber].challenge}</p>
            </div>
            <button className='next'>Nästa</button>
        </div>
    );
};

export default Competition;