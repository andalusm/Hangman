import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Score from './Components/Score';
import Solution from './Components/Solution';
import Letters from './Components/Letters';
import EndGame from './Components/EndGame';
import Hangman from './Components/Hangman';

function App() {
  const [ended, setEnded] = useState(false)
  const [won, setWon] = useState(false)
  const [score, setScore] = useState(100)
  const solutions = [{
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
 ]
  
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
    const foundAll = [...solution.word.toUpperCase()].every(l=> newLetters[l])
    return foundAll
  }
  const restart = function(){
    setEnded(false)
    setWon(false)
    generateWord()
    setLetters(generateLetterStatuses())
    setScore(100) 
    const startImg = require(`./images/hangman-${0}.svg`)
    setHangman(startImg.default || startImg)  
  }
  const getHangmanImg= ()=>{
    if (score >= 90 ) {
      return 0;
    } else if (score >= 80 && score < 90) {
      return 1;
    } else if (score >= 70 && score < 80) {
      return 2;
    } else if (score >= 60 && score < 70) {
      return 3;
    } else if (score >= 30 && score < 60) {
      return 4;
    } else if (score >= 10 && score < 30) {
      return 5;
    } else 
      return 6;
  }
  const checkLetter = function (letter) {
    if (!letters[letter]) {

      const newLetters = updateLetter(letter)
      let newScore 
      
      if (solution.word.toUpperCase().indexOf(letter) >= 0) {
        newScore = score + 5
      }
      else {
        newScore = score - 20
      }
      const hangmanImg = getHangmanImg()
      setHangman(require(`./images/hangman-${hangmanImg}.svg`))
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
  const startImg = require(`./images/hangman-${0}.svg`)
  const [hangman, setHangman] = useState(startImg.default || startImg)
  console.log(hangman)
  return (
    <>{!ended ?
      <div className="container">
         <div class="hangman-box">
            <Hangman hangman={hangman}></Hangman>
            <h1>Hangman Game Score:  <Score score={score} /> </h1>
        </div>
        <div className="game-box">
       
        <Solution chosenLetters={letters} hint={solution.hint} word={solution.word.toUpperCase()} />
        <br></br>
        <h4 className="guesses-text">Available Letters:</h4>
        <Letters pickLetter={checkLetter} letters={letters} />
        </div>
      </div>
      :
      <div className='game-modal'>
      <EndGame score={score} won={won} secretWord={solution.word.toUpperCase()} restart={restart}></EndGame>
      
      </div>
    }
    </>
  );
}

export default App;
