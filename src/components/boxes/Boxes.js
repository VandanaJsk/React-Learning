import React from 'react';
import { useState } from 'react';
import './Boxes.css';

export default function Boxes() {

    const [show, setShow] = useState('1');
    console.log(show)
  return (
    <div>
      <button onClick = {() => {setShow('2')}}>1</button>
      <button style={{display : show >= '2' ? 'inline' : 'none'}} onClick = {() => {setShow('3')}}>2</button>
      <button style={{display : show >= '3' ? 'inline' : 'none'}} >3</button>
    </div>
  )
}
