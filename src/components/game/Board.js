import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onClick, indexOfWin }) => {
  return (
    <div className="board-wrapper">
      {cells.map((item, index) => {
        return (
          <Cell
            value={item}
            key={index}
            onClick={() => {
              onClick(index);
            }}
            index={index}
            indexOfWin={indexOfWin}
          />
        );
      })}
    </div>
  );
};

export default Board;
