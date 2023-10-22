import React from "react";

const Cell = ({ value, onClick, index, indexOfWin }) => {
  return (
    <div
      className={`cell-wrapper ${value === "X" ? "is-x" : value === "O" ? "is-o" : ""} ${
        (indexOfWin || []).includes(index) ? "cell-wind" : ""
      }`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Cell;
