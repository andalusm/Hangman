import React from 'react'

export default function Letter({letter, active, pickLetter}) {
  return (
    <>
    <span onClick={()=>pickLetter(letter)} className={active ? "picked": ""}  >{letter}</span>    
    </>
  )
}
