import React from 'react';
import IndSquare from './IndSquare';

const Board = (props) => {
    let indSquareCntr = [];

    for (let i = 0; i < 9; i++) {
        indSquareCntr.push( <IndSquare value={props.squares[i]} onClick={() => props.onClick(i)} key={'square ' + i}/>);
    }

    return (
        <div className='board'>
          {indSquareCntr}
        </div>
    );
}

export default Board;