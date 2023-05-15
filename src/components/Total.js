import React from 'react'
import Vector from './vector.png'
const Total = (props) => {
    // console.log(data)
  return (
    <div className='total' style={{background:props.color,left:props.left}}>
        <span className='image'>
<img src={props.icon}/> </span>
<h2 className='head'>
<b>{props.head}</b></h2>
<h1 className='value'>{props.value}</h1> </div>
  )
}

export default Total