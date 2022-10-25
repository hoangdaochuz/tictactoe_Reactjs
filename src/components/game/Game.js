import React, { useState } from "react";
import Board from "./Board";
import { findWinner } from "./helper";
import "./GameStyle.css";
const Game = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(true);
  const winner = findWinner(cells);
  const handleClick = (index) => {
    let cellsCopy = [...cells];
    if (winner || cellsCopy[index]) return;
    cellsCopy[index] = isNextX ? "X" : "O";
    setIsNextX(!isNextX);
    setCells(cellsCopy);
  };
  const resetGame = ()=>{
    setCells(Array(9).fill(null));
    setIsNextX(true);
  }
  return (
    <div className="game-wrapper">
      <h1 className="game-title">TIC TAC TOE</h1>
      <Board cells={cells} onClick={handleClick} />
      {winner?(<h3 className="notification">Winner is {winner}</h3>): <h3 className="notification">LET'S START</h3>}
      <button onClick={resetGame} className="reset-btn">RESET</button>
    </div>
  );
};

export default Game;
