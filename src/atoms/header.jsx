import React from 'react';

function Header({displayLetter}) {

  return (
    <div className='header'>
      <h1>Hangman Game</h1>
      <p>Find the hidden word. - Enter a letter.  <span className='display-letter'>{displayLetter}</span></p>
    </div>
  );
}

export default Header;