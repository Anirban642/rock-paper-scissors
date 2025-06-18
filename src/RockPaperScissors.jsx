import React, { useState } from 'react';

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const choices = [
    { name: 'rock', emoji: '🪨', label: 'Rock' },
    { name: 'paper', emoji: '📄', label: 'Paper' },
    { name: 'scissors', emoji: '✂️', label: 'Scissors' }
  ];

  const getRandomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)].name;
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return 'tie';
    
    const winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
    
    return winConditions[player] === computer ? 'win' : 'lose';
  };

  const playGame = (choice) => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    setPlayerChoice(choice);
    
    setTimeout(() => {
      const compChoice = getRandomChoice();
      setComputerChoice(compChoice);
      
      const gameResult = determineWinner(choice, compChoice);
      
      if (gameResult === 'win') {
        setPlayerScore(prev => prev + 1);
        setResult('You Win! 🎉');
      } else if (gameResult === 'lose') {
        setComputerScore(prev => prev + 1);
        setResult('Computer Wins! 🤖');
      } else {
        setResult("It's a Tie! 🤝");
      }
      
      setIsPlaying(false);
    }, 1000);
  };

  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setPlayerScore(0);
    setComputerScore(0);
    setResult('');
    setIsPlaying(false);
  };

  const getChoiceDisplay = (choice) => {
    const found = choices.find(c => c.name === choice);
    return found ? found.emoji : '❓';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Rock Paper Scissors</h1>
          <p className="text-gray-300">Choose your weapon!</p>
        </div>

        <div className="flex justify-between items-center mb-8 bg-white/5 rounded-2xl p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{playerScore}</div>
            <div className="text-sm text-gray-300">You</div>
          </div>
          <div className="text-white text-lg">VS</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{computerScore}</div>
            <div className="text-sm text-gray-300">Computer</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-3xl">
                {isPlaying ? '🤔' : getChoiceDisplay(playerChoice)}
              </span>
            </div>
            <div className="text-sm text-gray-300">Your Choice</div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-3xl">
                {isPlaying ? '🤖' : getChoiceDisplay(computerChoice)}
              </span>
            </div>
            <div className="text-sm text-gray-300">Computer Choice</div>
          </div>
        </div>

        {result && (
          <div className="text-center mb-6">
            <div className="text-2xl font-bold text-white bg-white/10 rounded-2xl p-4">
              {result}
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-3 mb-6">
          {choices.map((choice) => (
            <button
              key={choice.name}
              onClick={() => playGame(choice.name)}
              disabled={isPlaying}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl p-4 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10 hover:border-white/30"
            >
              <div className="text-3xl mb-2">{choice.emoji}</div>
              <div className="text-sm text-white font-medium">{choice.label}</div>
            </button>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissors;