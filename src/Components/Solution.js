import React from 'react'
import Letter from './Letter'

export default function Solution({word,hint, chosenLetters}) {
    const letters =  [...word]
  return (
    <div>
        <div className='word-display'>
            {letters.map((l,i)=><Letter letterClass='letter' key={i} letter={chosenLetters[l]? l+" ":""}/>)}
        </div>
    <div className="hint-text">
       <b>Hint: </b> <em>{hint}</em>
    </div>

    </div>

  )
}
