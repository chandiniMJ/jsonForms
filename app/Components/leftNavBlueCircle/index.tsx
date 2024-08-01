import React from 'react'
import "./blueCircle.css"

export default function LeftNavBlueCircle(props:{value:number}) {
  return (
    <div className='blue-circle'>{props.value+1}</div>
  )
}
