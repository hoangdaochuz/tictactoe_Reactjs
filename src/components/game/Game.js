import React, { useState } from "react";
import Board from "./Board";
import { findWinner } from "./helper";
import "./GameStyle.css";
import { toast } from "react-toastify";
import { Switch } from "antd";
const Game = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  console.log("🚀 ~ file: Game.js:8 ~ Game ~ cells:", cells);
  const [isNextX, setIsNextX] = useState(true);
  const [locationHistory, setLocationHistory] = useState([]);
  const [boardHistory, setBoardHistory] = useState([]);
  const { winner, indexOfWin } = findWinner(cells);
  const [statusClicked, setStatusClicked] = useState(undefined);
  const [isDesc, setDesc] = useState(false);
  console.log("🚀 ~ file: Game.js:16 ~ Game ~ isDesc:", isDesc);
  const handleClick = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    let cellsCopy = [...cells];
    if (winner || cellsCopy[index]) return;
    setLocationHistory([...locationHistory, { row, col }]);
    cellsCopy[index] = isNextX ? "X" : "O";
    setIsNextX(!isNextX);
    setBoardHistory([...boardHistory, cellsCopy]);
    setCells(cellsCopy);
  };
  const resetGame = () => {
    setCells(Array(9).fill(null));
    setIsNextX(true);
    setBoardHistory([]);
    setLocationHistory([]);
  };
  if (!winner && cells.every((cell) => cell)) toast.info("DRAW");

  const handleJumpStatusBoard = (index) => {
    setCells(isDesc ? boardHistory.slice().reverse().at(index) : boardHistory[index]);
    setStatusClicked(index);
  };
  const _locationHistory = isDesc ? locationHistory.slice().reverse() : locationHistory;
  return (
    <div className="game-wrapper">
      <h1 className="game-title">TIC TAC TOE</h1>
      <div className="board-container">
        <Board cells={cells} onClick={handleClick} indexOfWin={indexOfWin} />
        <div className="game-info">
          <h1>Game history</h1>
          <span>Desc: </span>
          <Switch onChange={() => setDesc((prev) => !prev)} />
          {_locationHistory.map((location, index) => (
            <li
              style={{ listStyleType: "none", cursor: "pointer", marginBottom: "10px" }}
              className={`${index === statusClicked ? "statusHistory" : ""}`}
              onClick={() => handleJumpStatusBoard(index)}
            >
              You are move at ({location.row}, {location.col})
            </li>
          ))}
        </div>
      </div>
      {winner ? <h3 className="notification">Winner is {winner}</h3> : <h3 className="notification">LET'S START</h3>}
      <button onClick={resetGame} className="reset-btn">
        RESET
      </button>
    </div>
  );
};

export default Game;
