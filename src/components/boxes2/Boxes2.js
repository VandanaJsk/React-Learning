import React from 'react'
import { useState } from 'react'
import './Boxes2.css';

export default function Boxes2() {

   const [color, setColor] = useState(0);  

  // return (
  //   //all buttons have same color
  //   <div>
  //     <button onClick ={() => {setColor('red')}} style = {{backgroundColor : color}}>Red</button>
  //     <button onClick ={() => {setColor('green')}} style = {{backgroundColor : color}}>Green</button>
  //     <button onClick ={() => {setColor('blue')}} style = {{backgroundColor : color}}>Blue</button>
  //   </div>
  // )

//all boxes have different color
// return (
//   <>
//   <div>
//    <button style = {{backgroundColor : color == 'red' ? 'red' : 'none'}} onClick={() => {setColor('red')}} >Red</button>
//    <button style = {{backgroundColor : color == 'green' ? 'green' : 'none'}} onClick={() => {setColor('green')}}>Green</button>
//    <button style = {{backgroundColor : color == 'blue' ? 'blue' : 'none'}} onClick={() => {setColor('blue')}}>Blue</button>
//   </div>
//   </>
// )

// return (
//   //all buttons add in string format 
//   <>
//   <h1>Total Score: {color}</h1>
//   <div>
//     <button onClick = {() => {setColor(color + 10)}}>10</button>
//     <button onClick = {() => {setColor(color + 20)}}>20</button>
//     <button onClick = {() => {setColor(color + 30)}}>30</button>
//     <button onClick = {() => {setColor(color + 40)}}>40</button>
//     <button onClick = {() => {setColor(color + 50)}}>50</button>  
//   </div>
//   <br></br>
//   <button onClick = {() => {setColor('0')}}>Restart</button>
//   </>
// )

// return (
//   //all buttons add in number format 
//   <>
//   <h1>Total Score: {color}</h1>
//   <div>
//     <button onClick = {() => {setColor(color + 10)}}>10</button>
//     <button onClick = {() => {setColor(color + 20)}}>20</button>
//     <button onClick = {() => {setColor(color + 30)}}>30</button>
//     <button onClick = {() => {setColor(color + 40)}}>40</button>
//     <button onClick = {() => {setColor(color + 50)}}>50</button>  
//   </div>
//   <br></br>
//   <button onClick = {() => {setColor(0)}}>Restart</button>
//   </>
// )

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