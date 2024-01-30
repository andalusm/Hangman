import React from 'react'

export default function Letter({letter, active, pickLetter, letterClass}) {
  return (
    <>
    {letterClass==='letter'?
    <span className={letter!=="" ? letterClass + " guessed": letterClass} >{letter}</span>    
    :
    <button  onClick={()=>pickLetter(letter)} disabled={active}>{letter}</button>
    }
    </>
  )
}
