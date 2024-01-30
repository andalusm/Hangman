import React from 'react'

export default function EndGame({secretWord, won, restart, score}) {
  let imgSrc
  if(won){
    imgSrc = require("../images/victory.gif")
  }
  else{
    imgSrc = require("../images/lost.gif")
  }
  return (
    <div className='content'>
      <img src={imgSrc} alt="gif"></img>
      <h4>{won?"Congratulations":"Game over!!"}</h4>
        {!won?<p>The correct word was: <b>{secretWord}</b></p>: <p>You got score of:<b>{score}</b></p>}
        <button class="play-again" onClick={restart}>Restart</button>
        

    </div>
  )
}
