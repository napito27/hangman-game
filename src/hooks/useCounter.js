import React from 'react'

function useCounter() {
  const [wins, setWins] = React.useState(0);
  const [losses, setLosses] = React.useState(0);

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

  return {wins, losses, handleWin, handleLoss, reset}
};

export default useCounter;