import React from 'react'
import { useState } from 'react'
import './Boxes2.css';

export default function Boxes2() {

   const [color, setColor] = useState(0);  

return (
  //aafter click the button, background color should be same as button color
  <>
  <h1>Total Score: {color}</h1>
  <div>
    <button onClick = {() => {setColor(color + 10)}}>10</button>
    <button onClick = {() => {setColor(color + 20)}}>20</button>
    <button onClick = {() => {setColor(color + 30)}}>30</button>
    <button onClick = {() => {setColor(color + 40)}}>40</button>
    <button onClick = {() => {setColor(color + 50)}}>50</button>  
  </div>
  <br></br>
  <button onClick = {() => {setColor(0)}}>Restart</button>
  </>
)

  }