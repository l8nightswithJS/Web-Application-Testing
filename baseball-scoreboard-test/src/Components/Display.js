import React, { useState } from 'react';

const Display = (props) => {
   


    return (
        <>
        <div>
            <h2>Outs: {props.outs}</h2>
            <h2>strikes: {props.strikes}</h2>
            <h2>Balls: {props.balls}</h2>
            <button onClick={props.handleStrikes}>Strike</button>
            <button onClick={props.handleBalls}>Ball</button>
            <button onClick={props.handleFouls}>Foul</button>
            <button onClick={props.handleHit}>Hit</button>
            
        </div>
        </>
    )
    
}

export default Display;