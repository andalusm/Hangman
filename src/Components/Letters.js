import React from 'react'
import Letter from './Letter'

export default function Letters ({letters, pickLetter}) {
  return (
    <div className='keyboard'>{ Object.keys(letters).map((l,i)=><Letter letterClass='' key={i} letter={l} pickLetter={pickLetter} active={letters[l]}></Letter>)}</div>
  )
}
