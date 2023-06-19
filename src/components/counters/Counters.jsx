import React, {useState} from 'react'
import './Counters.css'

export default function Counters() {

const [count, setCount] = useState(0)

  return (
    <div className='counter-wrapper'>
      <button className='btn' onClick={() => {setCount(count - 1)}}>-</button>
      <p>{count}</p>
      <button className='btn' onClick={() => {setCount(count + 1)}}>+</button>
    </div>
  )
}
