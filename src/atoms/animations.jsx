import React from 'react';

import {checkWin} from '../helpers/helper-functions';

function Animations({error, correctLetters, wrongLetters, selectedWord}) {
  const gameStatus = checkWin(correctLetters, wrongLetters, selectedWord);
  
  return (
    <>
      {(error.length === 7 && gameStatus !== 'win') && <div className='animation'>😬</div>}
      {(error.length === 8 && gameStatus !== 'win') && <div className='animation'>😵</div>}
      {gameStatus === 'win' && <div className='animation'>😀</div>}
    </>
  );
}

export default Animations;