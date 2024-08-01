import React from 'react'
import "./greyCircle.css"

export default function LeftNavGreyCircle(props:{value:number}) {
  return (
    <div className='grey-circle'>{props.value+1}</div>
  )
}
