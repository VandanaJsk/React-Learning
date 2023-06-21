import React, {useState} from 'react'
import './Counters.css'

export default function Counters() {

const [count, setCount] = useState(0)

  return (
    <div className='counter-wrapper'>
      <button className='btn' onClick={() => {setCount(count - 1)}}>-</button>
      <button className='mid-btn'>{count}</button>
      <button className='btn' onClick={() => {setCount(count + 1)}}>+</button>
    </div>
  )
}
