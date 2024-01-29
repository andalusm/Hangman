import React from 'react'

export default function EndGame({secretWord, won}) {
  return (
    <div>
        {won?"Congratulations":"The secret word was :"+secretWord}

    </div>
  )
}
