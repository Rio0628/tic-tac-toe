import React from 'react';

const IndSquare = (props) => {
    return (
        <div className='indSquare' onClick={props.onClick}>
            {props.value}
        </div>
    );
}

export default IndSquare;