import React from 'react'
import Letter from './Letter'

export default function Solution({word,hint, chosenLetters}) {
    const letters =  [...word]
  return (
    <div>
        <div>
            {letters.map((l,i)=><Letter key={i} letter={chosenLetters[l]? l+" ":"_ "}/>)}
        </div>
    <div>
        <em>{hint}</em>
    </div>

    </div>

  )
}
