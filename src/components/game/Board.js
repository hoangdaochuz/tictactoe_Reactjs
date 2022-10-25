import React from 'react';
import Cell from './Cell';

const Board = ({cells, onClick}) => {
    return (
        <div className="board-wrapper">
            {cells.map((item, index )=>{
                return (
                    <Cell value={item} key = {index} onClick = {()=>{onClick(index)}}/>
                )
            })}
        </div>
    );
};

export default Board;