import React, { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard';

function App() {
  const [batter, setBatter] = useState('Eddie')
  
  return (
    <div className="App">
    <h1>{batter}</h1>    
      <Dashboard />
    </div>
  );
}

export default App;
