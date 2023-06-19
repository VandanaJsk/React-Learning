////  slider 
import React from 'react'
import './Slider.css'

export default function Slider(props) {
  return (
    <div className='slider-wrapper'>
      <button className='btn' onClick={() => {props.setSelected('flipkart')}}>Flipkart</button>
      <button className='btn' onClick={() => {props.setSelected('grocery')}}>Grocery</button>
    </div>
  )
}
