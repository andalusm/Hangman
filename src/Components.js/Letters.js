import React from 'react'
import Letter from './Letter'

export default function Letters () {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    const letters= [...alphabet]
  return (
    <div>{letters.map(l=><Letter letter={l}></Letter>)}</div>
  )
}
