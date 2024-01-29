import React from 'react'

export default function Score({score}){
  let scoreClass = ''
  if(score >= 80){
    scoreClass='high'
  }
  else if (score >= 50){
  scoreClass='mid'
  }
  else {
    scoreClass='low'
  }
  return (
    <div>
        <div className={scoreClass}>
            {score}
        </div>
    </div>
  )
}
