import React from 'react';

import {checkWin} from '../helpers/helper-functions';

function GameCounter({correctLetters, wrongLetters, selectedWord, attempts}) {
  const [wins, setWins] = React.useState(0);
  const [losses, setLosses] = React.useState(0);

  const gameStatus = checkWin(correctLetters, wrongLetters, selectedWord);

  const handleWin = () => {
    setWins((prevwins) => prevwins + 1);
  };

  const handleLoss = () => {
    setLosses((prevLosses) => prevLosses + 1);
  };
  
  const reset = () => {
    setWins(0);
    setLosses(0);
  };

  React.useEffect(() => {
    if (gameStatus !== '') {
      if (gameStatus === 'win') {
        handleWin();
      } else if (gameStatus === 'lose') {
        handleLoss();
      }
    }
  },[gameStatus]);

  return (
    <div className='counter'>
      <p>Score</p>
      <p>Wins: {wins}</p> <p>Losses: {losses}</p>
      {
        (wrongLetters.length === 0 && correctLetters.length === 0) && 
        <button onClick={reset} className='reset'>
          Reset
        </button>
      }
    </div>
  );
}

export default GameCounter;

