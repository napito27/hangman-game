import React from 'react';

import {
  Copyrights,
  Figure, 
  Header, 
  Notification, 
  Popup, 
  Word, 
  WrongLetters
} from '../atoms';

import {showNotification as show} from '../helpers/helper-functions';

import '../styles/styles.scss';

const words = [
  'universidad',
  'gobierno', 
  'dormir', 
  'departamento', 
  'amigo', 
  'condiciones', 
  'jugar', 
  'experiencia',
  'actividades',
  'agua',
  'comercial',
  'colección',
  'conferencia',
  'individual',
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = React.useState(true);
  const [correctLetters, setCorrectLetters] = React.useState([]);
  const [wrongLetters, setWrongLetters] = React.useState([]);
  const [showNotification, setShowNotification] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = event => {
      const {key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();

          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } else {
              show(setShowNotification);
            }
          }else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            } else {
              show(setShowNotification); 
            }
          }
        }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div>
      <Header />
      <div div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word 
          selectedWord={selectedWord} 
          correctLetters={correctLetters}
        />
      </div>
      <Popup 
        correctLetters={correctLetters} 
        wrongLetters={wrongLetters} 
        selectedWord={selectedWord} 
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
      <Copyrights appName='Hangman' designer='Napo'/>
    </div>
  );
}

export default App;
