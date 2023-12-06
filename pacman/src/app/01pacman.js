import React from 'react';
import PacManBoard from './02pacboard.js';

const GamePage = () => {
  // boardData is a 2D array representing the game board
  const boardData = [
    ['P', 'G', '.', '.', '.', '.', '.', '.', '.', '.'],
  ];

  return (
    <div className="game-container">
      <h1>Pac-Man Game</h1>
      <PacManBoard boardData={boardData} />
    </div>
  );
};

export default GamePage;