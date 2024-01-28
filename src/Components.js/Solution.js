import React from 'react'
import Letter from './Letter'

export default function Solution({word,hint}) {
    const letters =  [...word]
  return (
    <div>
        <div>
            {letters.map(l=><Letter letter={"_ "}/>)}
        </div>
    <div>
        <em>{hint}</em>
    </div>

    </div>

  )
}
