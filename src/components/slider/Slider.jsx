////  slider 
import React, {useState} from 'react'
import './Slider.css'

export default function Slider(props) {

const [selected, setSelected] = useState('flipkart');

  return (
    <div className='slider-wrapper'>
     
      <button className={`${props.selected === 'flipkart' ? "selected" : "notselected"}`} onClick={() => {props.setSelected('flipkart')}}>Flipkart</button>
      <button className={`${props.selected === 'grocery' ? "selected" : "notselected"}`} onClick={() => {props.setSelected('grocery')}}>Grocery</button>
     
    </div>
  )
}
