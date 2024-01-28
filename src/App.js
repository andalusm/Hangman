import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Score from './Components.js/Score';
import Solution from './Components.js/Solution';
import Letters from './Components.js/Letters';

function App() {
  const [score,setScore] = useState(100)
  const [solution, setSolution] = useState("What you do when calm")
  return (
    <>
    <Score Score={score} />
    <Solution hint={solution} word={"Girl"}/>
    <div>Available Letters:</div>
    <Letters/>  
    </>
  );
}

export default App;
