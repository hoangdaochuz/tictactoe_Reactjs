import React from 'react';

const Cell = ({value, onClick}) => {
    return (
        <div className={`cell-wrapper ${value==='X'?'is-x':value==='O'?'is-o':''}`} onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;