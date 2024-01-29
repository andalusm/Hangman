import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Score from './Components.js/Score';
import Solution from './Components.js/Solution';
import Letters from './Components.js/Letters';
import EndGame from './Components.js/EndGame';

function App() {
  const [ended, setEnded] = useState(false)
  const [won, setWon] = useState(false)
  const [score, setScore] = useState(100)
  const solutions = [{ hint: "Favorite activity", word: "BAKING" }, { hint: "It's not hard, it's ...", word: "EASY" }, ]
  
  const [solution, setSolution] = useState(solutions[0])
  const generateWord =  function(){
    const random = Math.floor(Math.random() * solutions.length)
    setSolution(solutions[random])
  }
  const generateLetterStatuses = function () {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  
  const [letters, setLetters] = useState(generateLetterStatuses())

  const updateLetter= function(letter){
    const newLetters = { ...letters }
      newLetters[letter] = true
      setLetters(newLetters)
      return newLetters

  }
  const checkWordFound = function(newLetters){
    const foundAll = [...solution.word].every(l=> newLetters[l])
    return foundAll
  }
  const restart = function(){
    setEnded(false)
    setWon(false)
    generateWord()
    setLetters(generateLetterStatuses())
    setScore(100)    
  }
  const checkLetter = function (letter) {
    if (!letters[letter]) {

      const newLetters = updateLetter(letter)
      let newScore 
      if (solution.word.indexOf(letter) >= 0) {
        newScore = score + 5
        
      }
      else {
        newScore = score - 20
        
      }
      setScore(newScore)
      if(checkWordFound(newLetters)){
        setEnded(true)
        setWon(true)
      }
      if (newScore <= 0) {
        setEnded(true)
        setWon(false)
      }
    }


  }
  return (
    <>{!ended ?
      <div>
        <Score score={score} />
        <Solution chosenLetters={letters} hint={solution.hint} word={solution.word} />
        <div>Available Letters:</div>
        <Letters pickLetter={checkLetter} letters={letters} />
      </div>
      :
      <div>
      <EndGame won={won} secretWord={solution.word}></EndGame>
      <button onClick={restart}>Restart</button>
      </div>
    }
    </>
  );
}

export default App;
