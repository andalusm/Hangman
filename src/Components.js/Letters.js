import React from 'react'
import Letter from './Letter'

export default function Letters ({letters, pickLetter}) {
  return (
    <div>{ Object.keys(letters).map((l,i)=><Letter key={i} letter={l} pickLetter={pickLetter} active={letters[l]}></Letter>)}</div>
  )
}
