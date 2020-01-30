import React, { useState } from 'react';
import Display from '../Components/Display'
const Dashboard = () => {
   
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [outs, setOuts] = useState(0);
    const [fouls, setFouls] = useState(0)

    const handleStrikes = () => {
        if(strikes === 2) {
            setStrikes(0);
            setBalls(0);
            setOuts(outs + 1)
        } else {
            setStrikes(strikes + 1)
        }
    }

    const handleBalls = () => {
        if(balls === 3) {
            setStrikes(0);
            setBalls(0);
        } else {
            setBalls(balls + 1)
        }
    }

    const handleFouls = () => {
        if(strikes < 2) {
            setStrikes(strikes + 1);
            
        } 
    }

    const handleHit = () => {
        setBalls(0);
        setStrikes(0);
    }




    return (
      <>
          <Display handleStrikes={handleStrikes} strikes={strikes} outs={outs} handleBalls={handleBalls} balls={balls} fouls={fouls} handleFouls={handleFouls} handleHit={handleHit}/>
      </>
    );
}

export default Dashboard;